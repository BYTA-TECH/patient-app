/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ReservedSlotDTO } from '../models/reserved-slot-dto';
import { AddressLineDTO } from '../models/address-line-dto';
import { GoogleMedicalNews } from '../models/google-medical-news';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findSlotsUsingGETPath = '/api/Dr-slots/{date}/{doctorId}';
  static readonly getAllAddressLinesByPatientIdUsingGETPath = '/api/address-linesByPatientId/{patientId}';
  static readonly getMedicalNewsUsingGETPath = '/api/googleMedicalNews';
  static readonly test2UsingGETPath = '/api/test2/{date}/{doctorId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `QueryResourceService.FindSlotsUsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  findSlotsUsingGETResponse(params: QueryResourceService.FindSlotsUsingGETParams): __Observable<__StrictHttpResponse<Array<ReservedSlotDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Dr-slots/${params.date}/${params.doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReservedSlotDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindSlotsUsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  findSlotsUsingGET(params: QueryResourceService.FindSlotsUsingGETParams): __Observable<Array<ReservedSlotDTO>> {
    return this.findSlotsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ReservedSlotDTO>)
    );
  }

  /**
   * @param patientId patientId
   * @return OK
   */
  getAllAddressLinesByPatientIdUsingGETResponse(patientId: number): __Observable<__StrictHttpResponse<Array<AddressLineDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/address-linesByPatientId/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AddressLineDTO>>;
      })
    );
  }
  /**
   * @param patientId patientId
   * @return OK
   */
  getAllAddressLinesByPatientIdUsingGET(patientId: number): __Observable<Array<AddressLineDTO>> {
    return this.getAllAddressLinesByPatientIdUsingGETResponse(patientId).pipe(
      __map(_r => _r.body as Array<AddressLineDTO>)
    );
  }

  /**
   * @return OK
   */
  getMedicalNewsUsingGETResponse(): __Observable<__StrictHttpResponse<GoogleMedicalNews>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/googleMedicalNews`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GoogleMedicalNews>;
      })
    );
  }
  /**
   * @return OK
   */
  getMedicalNewsUsingGET(): __Observable<GoogleMedicalNews> {
    return this.getMedicalNewsUsingGETResponse().pipe(
      __map(_r => _r.body as GoogleMedicalNews)
    );
  }

  /**
   * @param params The `QueryResourceService.Test2UsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  test2UsingGETResponse(params: QueryResourceService.Test2UsingGETParams): __Observable<__StrictHttpResponse<Array<ReservedSlotDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/test2/${params.date}/${params.doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReservedSlotDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.Test2UsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  test2UsingGET(params: QueryResourceService.Test2UsingGETParams): __Observable<Array<ReservedSlotDTO>> {
    return this.test2UsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ReservedSlotDTO>)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for findSlotsUsingGET
   */
  export interface FindSlotsUsingGETParams {

    /**
     * doctorId
     */
    doctorId: number;

    /**
     * date
     */
    date: string;
  }

  /**
   * Parameters for test2UsingGET
   */
  export interface Test2UsingGETParams {

    /**
     * doctorId
     */
    doctorId: number;

    /**
     * date
     */
    date: string;
  }
}

export { QueryResourceService }
