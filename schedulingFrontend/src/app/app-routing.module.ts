import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentFormComponent } from './student-form/student-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { SubmittedComponent } from './submitted/submitted.component';
// import { SubmissionsComponent } from './submissions/submissions.component';

const routes: Routes = [
  { path: 'studentForm', component: StudentFormComponent },
  // { path: 'submitted', component: SubmittedComponent },
  // { path: 'submissions/:code',component: SubmissionsComponent },
 	// { path: 'submissions',component: SubmissionsComponent },
  { path: '', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
