import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/proy/main/activities/activities.component';
import { HomeComponent } from './components/proy/main/home/home.component';
import { VolunterComponent } from './components/proy/main/volunter/volunter.component';
import { WantCollaborateComponent } from './components/proy/main/want-collaborate/want-collaborate.component';

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
    path: 'soy-voluntaria', component: VolunterComponent
  },
  {
    path: 'quiero-aportar', component: WantCollaborateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
