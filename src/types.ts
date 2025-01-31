export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'interested'
  | 'not_interested'
  | 'qualified'
  | 'converted'
  | 'lost';

export type LeadSource =
  | 'website'
  | 'facebook'
  | 'twitter'
  | 'google'
  | 'referral'
  | 'event'
  | 'other';

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: LeadSource;
  status: LeadStatus;
  notes: string;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
  interestedVehicle?: string;
  budget?: number;
  lastContactDate?: string;
}

export interface User {
  id: string;
  name: string;
  role: 'sales' | 'manager';
  email: string;
}