import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/home/activities/activities.component';
import { HomeComponent } from './components/home/home/home.component';
import { VolunterComponent } from './components/home/volunter/volunter.component';
import { WantCollaborateComponent } from './components/home/want-collaborate/want-collaborate.component';
import {ListVoluntersComponent} from './components/admin/list-volunters/list-volunters.component';
import {ListPendingApplicantsComponent} from './components/seeds/list-pending-applicants/list-pending-applicants.component';
import {ListApprovedApplicantsComponent} from './components/seeds/list-approved-applicants/list-approved-applicants.component';
import {ListRejectedApplicantsComponent} from './components/seeds/list-rejected-applicants/list-rejected-applicants.component';
import {
  ListContributorsOfMomentComponent
} from './components/seeds/list-contributors-of-moment/list-contributors-of-moment.component';
import {CreateSeedComponent} from './components/admin/create-seed/create-seed.component';
import {ManageTrackingComponent} from './components/tracking/manage-tracking/manage-tracking.component';
import {ListAllTrackingSeedsComponent} from './components/tracking/list-all-tracking-seeds/list-all-tracking-seeds.component';
import {LoggedGuard} from './core/guards/logged.guard';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {UnactiveVolunteersComponent} from './components/admin/unactive-volunteers/unactive-volunteers.component';
import {OrgActivitiesComponent} from './feature/org-activities/org-activities.component';
import {ExportPdfComponent} from './components/libs/export-pdf/export-pdf.component';
import {ListAllDonationsComponent} from './components/tracking/list-all-donations/list-all-donations.component';
import {BenefitedSeedsComponent} from './components/souvenirs/benefited-seeds/benefited-seeds.component';
import {SouvenirTrackingHistoryComponent} from './components/souvenirs/souvenir-tracking-history/souvenir-tracking-history.component';
import {SendReminderComponent} from './components/tracking/reminders/send-reminder/send-reminder.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'actividades-organizacion', component: OrgActivitiesComponent
  },
  {
    path: 'login-volunteer', component: VolunterComponent
  },
  {
    path: 'admin', component: AdminDashboardComponent
  },
  {
    path: 'quiero-aportar', component: WantCollaborateComponent
  },
  {
    path: 'admin/ver-voluntarios',
    component: ListVoluntersComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'admin/ver-voluntarios/inactivos',
    component: UnactiveVolunteersComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'admin/semillas/pendientes', component: ListPendingApplicantsComponent
  },
  {
    path: 'admin/semillas/rechazadas', component: ListRejectedApplicantsComponent
  },
  {
    path: 'admin/semillas', component: ListApprovedApplicantsComponent
  },
  {
    path: 'admin/tracking', component: ManageTrackingComponent
  },
  {
    path: 'admin/tracking/all-seeds', component: ListAllTrackingSeedsComponent
  },
  {
    path: 'admin/new-seed', component: CreateSeedComponent
  },
  {
    path: 'admin/tracking/export-tracking', component: ExportPdfComponent
  },
  {
    path: 'admin/tracking/donations', component: ListAllDonationsComponent
  },
  {
    path: 'admin/tracking/reminder-emails', component: SendReminderComponent
  },
  {
    path: 'admin/souvenirs/benefited-seeds', component: BenefitedSeedsComponent
  },
  {
    path: 'admin/souvenirs/history', component: SouvenirTrackingHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
