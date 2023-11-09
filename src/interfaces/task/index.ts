import { TimesheetInterface } from 'interfaces/timesheet';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  deadline?: any;
  status: string;
  project_id: string;
  created_at?: any;
  updated_at?: any;
  timesheet?: TimesheetInterface[];
  project?: ProjectInterface;
  _count?: {
    timesheet?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  project_id?: string;
}
