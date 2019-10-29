import { ProfilePageModule } from './../pages/profile/profile.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [


  // {
  //   path: 'tabs',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: 'tab1',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../pages/home/home.module').then(m => m.HomePageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'tab2',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'tab5',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'tab3',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../pages/post/post.module').then(m => m.PostPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'tab4',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/tabs/tab1',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
