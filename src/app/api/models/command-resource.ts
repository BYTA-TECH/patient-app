/* tslint:disable */
import { Link } from './link';
export interface CommandResource {
  _links?: Link;
  nextTaskId?: string;
  status?: string;
  taskName?: string;
  trackingId?: string;
}
