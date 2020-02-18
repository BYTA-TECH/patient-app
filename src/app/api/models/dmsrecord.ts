/* tslint:disable */
import { MedicalCase } from './medical-case';
export interface DMSRecord {
  id?: number;
  medicalCase?: MedicalCase;
  prescriptionRef?: string;
}
