/* tslint:disable */
import { DMSRecord } from './dmsrecord';
import { Patient } from './patient';
export interface MedicalCase {
  consultedDate?: string;
  createdDate?: string;
  diagnosed?: string;
  dmsRecords?: Array<DMSRecord>;
  id?: number;
  note?: string;
  patient?: Patient;
}
