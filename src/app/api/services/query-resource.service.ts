/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findDoctorByDoctorIdpCodeUsingGETPath = '/api/query/doctors/{doctorId}';
  static readonly findAllDoctorsUsingGETPath = '/api/query/findAllDoctors';
  static readonly findAllQualificationUsingGETPath = '/api/query/findAllQualification';
  static readonly findPatientUsingGETPath = '/api/query/patient/{patientCode}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param doctorIdpCode doctorIdpCode
   * @return OK
   */
  findDoctorByDoctorIdpCodeUsingGETResponse(doctorIdpCode: string): __Observable<__StrictHttpResponse<Doctor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/doctors/${doctorIdpCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Doctor>;
      })
    );
  }
  /**
   * @param doctorIdpCode doctorIdpCode
   * @return OK
   */
  findDoctorByDoctorIdpCodeUsingGET(doctorIdpCode: string): __Observable<Doctor> {
    return this.findDoctorByDoctorIdpCodeUsingGETResponse(doctorIdpCode).pipe(
      __map(_r => _r.body as Doctor)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllDoctorsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page 
   *
   * @return OK
   */
  findAllDoctorsUsingGETResponse(params: QueryResourceService.FindAllDoctorsUsingGETParams): __Observable<__StrictHttpResponse<Array<Doctor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllDoctors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Doctor>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllDoctorsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllDoctorsUsingGET(params: QueryResourceService.FindAllDoctorsUsingGETParams): __Observable<Array<Doctor>> {
    return this.findAllDoctorsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Doctor>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllQualificationUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQualificationUsingGETResponse(params: QueryResourceService.FindAllQualificationUsingGETParams): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllQualification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllQualificationUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQualificationUsingGET(params: QueryResourceService.FindAllQualificationUsingGETParams): __Observable<Array<string>> {
    return this.findAllQualificationUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param patientCode patientCode
   * @return OK
   */
  findPatientUsingGETResponse(patientCode: string): __Observable<__StrictHttpResponse<Patient>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/patient/${patientCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Patient>;
      })
    );
  }
  /**
   * @param patientCode patientCode
   * @return OK
   */
  findPatientUsingGET(patientCode: string): __Observable<Patient> {
    return this.findPatientUsingGETResponse(patientCode).pipe(
      __map(_r => _r.body as Patient)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for findAllDoctorsUsingGET
   */
  export interface FindAllDoctorsUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllQualificationUsingGET
   */
  export interface FindAllQualificationUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }
}

export { QueryResourceService }
