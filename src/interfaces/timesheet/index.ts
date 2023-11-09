import { UserInterface } from 'interfaces/user';
import { TaskInterface } from 'interfaces/task';
import { GetQueryInterface } from 'interfaces';

export interface TimesheetInterface {
  id?: string;
  hours_logged: number;
  date: any;
  user_id: string;
  task_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  task?: TaskInterface;
  _count?: {};
}

export interface TimesheetGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  task_id?: string;
}
