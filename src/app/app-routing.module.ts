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
    path: 'quiero-aportar', component: WantCollaborateComponent
  },
  {
    path: 'admin/ver-voluntarios', component: ListVoluntersComponent
  },
  {
    path: 'admin/aspirantes', component: ListPendingApplicantsComponent
  },
  {
    path: 'admin/aspirantes/rechazados', component: ListRejectedApplicantsComponent
  },
  {
    path: 'admin/aportadores', component: ListApprovedApplicantsComponent
  },
  {
    path: 'admin/aportadores/aportadoresDelDia', component: ListContributorsOfMomentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
