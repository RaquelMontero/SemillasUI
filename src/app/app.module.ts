import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*MATERIAL */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCarouselModule } from '@ngmodule/material-carousel'; // ---------- Important

import {
  GoogleLoginProvider,
} from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/utils/navbar/navbar.component';
import { FooterComponent } from './components/utils/footer/footer.component';
import { ButtonComponent } from './components/libs/button/button.component';
import { HomeComponent } from './components/proy/main/home/home.component';
import { VolunterComponent } from './components/proy/main/volunter/volunter.component';
import { SidebarComponent } from './components/utils/sidebar/sidebar.component';
import { ActivitiesComponent } from './components/proy/main/activities/activities.component';
import { CaruselComponent } from './components/libs/carusel/carusel.component';
import { WantCollaborateComponent } from './components/proy/main/want-collaborate/want-collaborate.component';
import { ListVoluntersComponent } from './components/admin/list-volunters/list-volunters.component';
import { ListPendingApplicantsComponent } from './components/applicants/list-pending-applicants/list-pending-applicants.component';
import { ListApprovedApplicantsComponent } from './components/applicants/list-approved-applicants/list-approved-applicants.component';
import { ListRejectedApplicantsComponent } from './components/applicants/list-rejected-applicants/list-rejected-applicants.component';
import { ListContributorsOfMomentComponent } from './components/contributors/list-contributors-of-moment/list-contributors-of-moment.component';
import { ViewVolunterDetailsComponent } from './components/admin/view-volunter-details/view-volunter-details.component';
import { VolunterDialogComponent } from './components/admin/volunter-dialog/volunter-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonalInformationComponent } from './components/proy/main/want-collaborate/personal-information/personal-information.component';
import { DonationsTypesComponent } from './components/proy/main/want-collaborate/donations-types/donations-types.component';
import { DonationsDetailsComponent } from './components/proy/main/want-collaborate/donations-details/donations-details.component';
import { LogInComponent } from './components/admin/log-in/log-in.component';
import { ConstantDonationComponent } from './components/proy/main/want-collaborate/donations-details/constant-donation/constant-donation.component';
import { UniqueDonationComponent } from './components/proy/main/want-collaborate/donations-details/unique-donation/unique-donation.component';
import { GenericTableComponent } from './components/libs/generic-table/generic-table.component';
import { ExitElementComponent } from './components/libs/exit-element/exit-element.component';
import { MessageSnackBarComponent } from './components/libs/message-snack-bar/message-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    HomeComponent,
    VolunterComponent,
    SidebarComponent,
    ActivitiesComponent,
    CaruselComponent,
    WantCollaborateComponent,
    ListVoluntersComponent,
    ListPendingApplicantsComponent,
    ListApprovedApplicantsComponent,
    ListRejectedApplicantsComponent,
    ListContributorsOfMomentComponent,
    ViewVolunterDetailsComponent,
    VolunterDialogComponent,
    PersonalInformationComponent,
    DonationsTypesComponent,
    DonationsDetailsComponent,
    LogInComponent,
    ConstantDonationComponent,
    UniqueDonationComponent,
    GenericTableComponent,
    ExitElementComponent,
    MessageSnackBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTreeModule,
    MatToolbarModule,
    MatCarouselModule.forRoot(),
    SocialLoginModule,
    CdkAccordionModule,
    HttpClientModule,
    MatAutocompleteModule,
    CdkStepperModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '460291057573-9dhoui1sslarqe6c911duli469fvbhii.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent],
  schemas:
    [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
