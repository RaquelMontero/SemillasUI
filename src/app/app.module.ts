import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

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
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

//import { MatCarouselModule } from '@ngmodule/material-carousel'; // ---------- Important
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './components/libs/footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';
import { HomeComponent } from './components/home/home/home.component';
import { VolunterComponent } from './components/home/volunter/volunter.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ActivitiesComponent } from './components/home/activities/activities.component';
import { CaruselComponent } from './components/libs/carusel/carusel.component';
import { WantCollaborateComponent } from './components/home/want-collaborate/want-collaborate.component';
import { ListVoluntersComponent } from './components/admin/list-volunters/list-volunters.component';
import { ListPendingApplicantsComponent } from './components/seeds/list-pending-applicants/list-pending-applicants.component';
import { ListApprovedApplicantsComponent } from './components/seeds/list-approved-applicants/list-approved-applicants.component';
import { ListRejectedApplicantsComponent } from './components/seeds/list-rejected-applicants/list-rejected-applicants.component';
import { ListContributorsOfMomentComponent } from './components/seeds/list-contributors-of-moment/list-contributors-of-moment.component';
import { ViewVolunterDetailsComponent } from './components/admin/view-volunter-details/view-volunter-details.component';
import { VolunterDialogComponent } from './components/admin/volunter-dialog/volunter-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInformationComponent } from './components/home/want-collaborate/personal-information/personal-information.component';
import { DonationsTypesComponent } from './components/home/want-collaborate/donations-types/donations-types.component';
import { LogInComponent } from './components/admin/log-in/log-in.component';
import { ConstantDonationComponent } from './components/home/want-collaborate/constant-donation/constant-donation.component';
import { UniqueDonationComponent } from './components/home/want-collaborate/unique-donation/unique-donation.component';
import { GenericTableComponent } from './shared/generic-table/generic-table.component';
import { ExitElementComponent } from './shared/exit-element/exit-element.component';
import { MessageSnackBarComponent } from './shared/message-snack-bar/message-snack-bar.component';
import { CreateSeedComponent } from './components/admin/create-seed/create-seed.component';
import { ModalViewSeedComponent } from './components/seeds/modal-view-seed/modal-view-seed.component';
import { ModalProcessSeedComponent } from './components/seeds/modal-process-seed/modal-process-seed.component';
import { EditSeedInfoComponent } from './components/seeds/edit-seed-info/edit-seed-info.component';
import { ModalDeactiveSeedComponent } from './components/seeds/modal-deactive-seed/modal-deactive-seed.component';
import { ManageTrackingComponent } from './components/tracking/manage-tracking/manage-tracking.component';
import { ListTrackingVoluntersComponent } from './components/tracking/manage-tracking/list-tracking-volunters/list-tracking-volunters.component';
import { ListTrackingVolunterSeedsComponent } from './components/tracking/manage-tracking/list-tracking-volunter-seeds/list-tracking-volunter-seeds.component';
import { ListSeedDonationsComponent } from './components/tracking/manage-tracking/list-seed-donations/list-seed-donations.component';
import { AsignSeedToVolunterComponent } from './components/tracking/asign-seed-to-volunter/asign-seed-to-volunter.component';
import { ListAllTrackingSeedsComponent } from './components/tracking/list-all-tracking-seeds/list-all-tracking-seeds.component';
import { ModalNewDonationComponent } from './components/tracking/modal-new-donation/modal-new-donation.component';
import {authInterceptorProviders} from './core/services/auth.interceptor';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import {EncodeHttpParamsInterceptor} from './core/interceptors/encoder.interceptor';
import { UnactiveVolunteersComponent } from './components/admin/unactive-volunteers/unactive-volunteers.component';
import { OrgActivitiesComponent } from './feature/org-activities/org-activities.component';
import { SentDataMessageComponent } from './components/home/want-collaborate/sent-data-message/sent-data-message.component';
import { ExportSheetComponent } from './components/libs/export-sheet/export-sheet.component';
import { ExportPdfComponent } from './components/libs/export-pdf/export-pdf.component';
import { ListAllDonationsComponent } from './components/tracking/list-all-donations/list-all-donations.component';
import { BenefitedSeedsComponent } from './components/souvenirs/benefited-seeds/benefited-seeds.component';
import { BenefitedSeedDialogComponent } from './components/souvenirs/benefited-seed-dialog/benefited-seed-dialog.component';
import { ViewBenefitedSeedComponent } from './components/souvenirs/view-benefited-seed/view-benefited-seed.component';
import { SouvenirTrackingHistoryComponent } from './components/souvenirs/souvenir-tracking-history/souvenir-tracking-history.component';

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
    LogInComponent,
    ConstantDonationComponent,
    UniqueDonationComponent,
    GenericTableComponent,
    ExitElementComponent,
    MessageSnackBarComponent,
    CreateSeedComponent,
    ModalViewSeedComponent,
    ModalProcessSeedComponent,
    EditSeedInfoComponent,
    ModalDeactiveSeedComponent,
    ManageTrackingComponent,
    ListTrackingVoluntersComponent,
    ListTrackingVolunterSeedsComponent,
    ListSeedDonationsComponent,
    AsignSeedToVolunterComponent,
    ListAllTrackingSeedsComponent,
    ModalNewDonationComponent,
    AdminDashboardComponent,
    UnactiveVolunteersComponent,
    OrgActivitiesComponent,
    SentDataMessageComponent,
    ExportSheetComponent,
    ExportPdfComponent,
    ListAllDonationsComponent,
    BenefitedSeedsComponent,
    BenefitedSeedDialogComponent,
    ViewBenefitedSeedComponent,
    SouvenirTrackingHistoryComponent,
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
  //  MatCarouselModule.forRoot(),
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
    AngularEditorModule
  ],
  providers:
    [authInterceptorProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EncodeHttpParamsInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas:
    [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
