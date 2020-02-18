/* tslint:disable */
import { MedicalCase } from './medical-case';
export interface Patient {
  createdDate?: string;
  dmsId?: string;
  dob?: string;
  id?: number;
  idpCode?: string;
  image?: string;
  imageContentType?: string;
  location?: string;
  medicalCases?: Array<MedicalCase>;
  phoneNumber?: number;
}
