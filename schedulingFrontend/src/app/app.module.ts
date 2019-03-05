import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { DataService } from './data.service';
// import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { FormComponent } from './form/form.component';
// import { NotFoundComponent } from './not-found/not-found.component';

import { FormService } from './form.service';
import { FormBasicComponent } from './form-basic/form-basic.component';
// import { FormVenueComponent } from './form-venue/form-venue.component';
// import { FormDateComponent } from './form-date/form-date.component';
// import { FormAccommodationComponent } from './form-accommodation/form-accommodation.component';
// import { SubmittedComponent } from './submitted/submitted.component';
// import { SubmissionsComponent } from './submissions/submissions.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FormComponent,
    FormBasicComponent
  ],
  imports: [
  	FormsModule,
  	// HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, MessageService,],//FormService,
  bootstrap: [AppComponent]
})
export class AppModule { }
