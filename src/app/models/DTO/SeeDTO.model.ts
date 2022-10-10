import {Validators} from '@angular/forms';

export interface User{
  userId: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  dni: string;
  birthdate: string;
}
export interface Seed{
  contributor_id: string;
  address: string;
  country: string;
  city: string;
  send_date: string;
  registerVolunter: string;
  contributorState: string;
  user: User;
  contributionConfig: SeedConfig;
  processInfo?: ProcessedSeed;
}
export interface SeedConfig{
  contribution_config_id: string;
  contributionType: string;
}

export interface ProcessedSeed{
  processed_contributor_id: string;
  processed_date: string;
  process_reason: string;
  process_volunter: string;
}

export interface ProcessSeedPayload{
  contributor_id: string;
  processed_date: string;
  processReason: string;
  processVolunterId: string;
  state: string;
}
