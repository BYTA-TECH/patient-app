import { KeycloakAdminConfig } from './../../configs/keycloak.admin.config';
import { Storage } from '@ionic/storage';
import { Util } from './../util';
import { OAuthService } from 'angular-oauth2-oidc';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  keycloakAdmin: KeycloakAdminClient;

  constructor(
    private oauthService: OAuthService,
    private keycloakConfig: KeycloakAdminConfig,
    private storage: Storage,
    private util: Util,
  ) {

    // console.log('Created Keycloak Service');
    // this.getCurrentUserDetails()
    // .then((data: any ) => {
    //   if (data.preferred_username !== 'guest') {
    //     console.log('Subscribing to notifications for the user from KC Cons ', data.preferred_username);
    //   }
    // });
  }


  createAccount(user: any, password: string, success: any, err: any) {
    this.keycloakConfig.refreshClient().then(() => {
      this.keycloakAdmin = this.keycloakConfig.kcAdminClient;
      user.realm = 'Ayoos';
      user.credentials = [{ type: 'password', value: password }];
      user.attributes = map;
      user.enabled = true;

      this.keycloakAdmin.users.create(user)
        .then(async res => {
          await this.keycloakAdmin.roles
            .findOneByName({
              name: 'patient',
              realm: 'Ayoos'
            })
            .then(async role => {
              await this.keycloakAdmin.users.addRealmRoleMappings({
                id: res.id,
                realm: 'Ayoos',
                roles: [
                  {
                    id: role.id,
                    name: role.name
                  }
                ]
              });
            }).then(() => {
              success(res);
            });
        })
        .catch(e => {
          err(e);
        });
    }
    );

  }

  async isAuthenticated(): Promise<boolean> {
    return await this.oauthService.hasValidAccessToken();
  }

  authenticate(credentials: any, success: any, err: any) {
    console.log('fetching');
    this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(
      credentials.username,
      credentials.password,
      new HttpHeaders()
    ).then((data: any) => {
      console.log('user', data);
      this.storage.set('user' , data);
      this.checkUserInRole(data.sub)
          .then(async hasRoleCustomer => {
            if (hasRoleCustomer) {
              success();
            } else {
              await this.oauthService.logOut();
              err();
            }
          })
          .catch(() => err());
    }).catch(e => {
      err();
    });
  }

  async getCurrentUserDetails() {
    return await this.oauthService.loadUserProfile();
  }

  async checkUserInRole(user): Promise<boolean> {
    return await new Promise<boolean>(async (resolve, reject) => {
      await this.keycloakConfig
        .refreshClient()
        .then(async () => {
          await this.keycloakConfig.kcAdminClient.users
            .listRoleMappings({
              id: user,
              realm: 'Ayoos'
            })
            .then(async roles => {
              const rolesAvailable = await roles.realmMappings.filter(
                mapping => {
                  if (mapping.name === 'patient') {
                    return true;
                  }
                }
              );
              if (rolesAvailable.length === 1) {
                resolve(true);
              } else {
                resolve(false);
              }
            });
        })
        .catch(err => reject(false));
    });
  }

  async updateCurrentUserDetails(keycloakUser: any): Promise<void> {
    return await this.keycloakAdmin.users.update(
      {
        id: keycloakUser.sub,
        realm: 'Ayoos'
      },
      {
        firstName: keycloakUser.name.split(' ')[0],
        lastName: keycloakUser.name.split(' ')[1],
        email: keycloakUser.email
      }
    );
  }

  resetPassword(newPassword , success , err) {
    this.storage.get('user')
    .then(user => {
      this.keycloakConfig.refreshClient()
      .then(() => {
        this.keycloakAdmin = this.keycloakConfig.kcAdminClient;
        this.keycloakAdmin.users.resetPassword(
          {
            realm: 'Ayoos',
            id: user.sub,
            credential: {
              temporary: false,
              type: 'password',
              value: newPassword,
            },
          }
        ).then(data => {
          success(data);
        })
        .catch(e => {
          err(e);
        });
      });

    });
  }

  logout() {
    this.oauthService.logOut();
    this.storage.clear();
    this.util.navigateToLogin();
  }
}
