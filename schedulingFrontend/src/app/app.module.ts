import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,NgForm }   from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { DataService } from './data.service';
import { MessageService } from './message.service';
import { StudentFormComponent } from './student-form/student-form.component';
// import { NotFoundComponent } from './not-found/not-found.component';

import { StudentFormService } from './student-form.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageWriterComponent } from './message-writer/message-writer.component';
import { FormPageComponent } from './form-page/form-page.component';
// import { FormBaseComponent } from './form-base/form-base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule, MatInputModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule, MatRadioModule, MatCardModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { FormGroupDisplayComponent } from './form-group-display/form-group-display.component';
import { SafeObjectComponent } from './safe-object/safe-object.component';
// import { AddressFormComponent } from './address-form/address-form.component';
// import { StudentForm1Component } from './student-form-1/student-form-1.component';
// import { FormVenueComponent } from './form-venue/form-venue.component';
// import { FormDateComponent } from './form-date/form-date.component';
// import { FormAccommodationComponent } from './form-accommodation/form-accommodation.component';
// import { SubmittedComponent } from './submitted/submitted.component';
// import { SubmissionsComponent } from './submissions/submissions.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StudentFormComponent,
    MessagesComponent,
    MessageWriterComponent,
    FormPageComponent,
    NavComponent,
    SafeObjectComponent,
    // FormGroupDisplayComponent,
    // AddressFormComponent,
    // FormBaseComponent,
    // StudentForm1Component
  ],
  imports: [
		// NgbModule,
  	// HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule, MatButtonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule, MatRadioModule, MatCardModule,MatExpansionModule,MatChipsModule,
  ],
  providers: [DataService, MessageService,StudentFormService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
