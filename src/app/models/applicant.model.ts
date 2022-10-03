export interface Applicant {
  applicant_id: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  dni: string;
  birthdate: Date;
  address: string;
  country: string;
  city: string;
  exit_date: Date;
  status: string;
  send_date: Date;
  applicantState: string;
  contributionConfig_id: number;
  contributionType: string;
  contribution_id: number;
}
