import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  location?: string;
  industry?: string;
  size?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  project?: ProjectInterface[];
  user?: UserInterface[];

  _count?: {
    project?: number;
    user?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  industry?: string;
  name?: string;
}
