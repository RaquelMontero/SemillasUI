export interface ContributionConfigDTO{
  id: number;
  contribution_key: string;
  register_date: Date ;
  contribution: ContributionDTO ;
  is_active: boolean ;
}

export interface ContributionDTO{
  const_contribution_id?: string;
  unique_contribution_id?: string;
  contributionEndDate?: Date;
  contributionStartDate?: Date;
  contribution_amount?: number;
  contribution_id: string;
  paymentDate?: number;
  paymentMethod?: PaymentMethodData;
  remainderType?: string;
  sendNewsType?: string;
  send_news?: boolean;
  start_month?: string;
  date_contribution?: Date;
}
