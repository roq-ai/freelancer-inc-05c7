interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Business Owner', 'Project Manager'],
  tenantName: 'Company',
  applicationName: 'Freelancer Inc.',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own tasks', 'Log hours in timesheet', 'Read project details', 'Read contract details'],
  ownerAbilities: ['Manage company information', 'Manage user information', 'Manage projects', 'Manage tasks'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bad52eb0-2d22-4610-8d17-0e900d178b4d',
};
