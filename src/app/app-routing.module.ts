import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/proy/main/activities/activities.component';
import { HomeComponent } from './components/proy/main/home/home.component';
import { VolunterComponent } from './components/proy/main/volunter/volunter.component';
import { WantCollaborateComponent } from './components/proy/main/want-collaborate/want-collaborate.component';
import {ListVoluntersComponent} from './components/admin/list-volunters/list-volunters.component';
import {ListPendingApplicantsComponent} from './components/applicants/list-pending-applicants/list-pending-applicants.component';
import {ListApprovedApplicantsComponent} from './components/applicants/list-approved-applicants/list-approved-applicants.component';
import {ListRejectedApplicantsComponent} from './components/applicants/list-rejected-applicants/list-rejected-applicants.component';
import {
  ListContributorsOfMomentComponent
} from './components/contributors/list-contributors-of-moment/list-contributors-of-moment.component';
import {CreateSeedComponent} from './components/admin/create-seed/create-seed.component';
import {ManageTrackingComponent} from './components/tracking/manage-tracking/manage-tracking.component';
import {ListAllTrackingSeedsComponent} from './components/tracking/list-all-tracking-seeds/list-all-tracking-seeds.component';
import {LoggedGuard} from './guards/logged.guard';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {UnactiveVolunteersComponent} from './components/admin/unactive-volunteers/unactive-volunteers.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'actividades-organizacion', component: ActivitiesComponent
  },
  {
    path: 'soy-voluntaria', component: VolunterComponent
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
    path: 'admin/semillas/semillas-pendientes', component: ListContributorsOfMomentComponent
  },
  {
    path: 'admin/seguimientos', component: ManageTrackingComponent
  },
  {
    path: 'admin/tracking/all-seeds', component: ListAllTrackingSeedsComponent
  },
  {
    path: 'admin/new-seed', component: CreateSeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
