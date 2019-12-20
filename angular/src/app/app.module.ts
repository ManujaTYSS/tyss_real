import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RequirmentformComponent } from './requirmentform/requirmentform.component';
import { HomeComponent } from './home/home.component';
import { UpdateRequirmentComponent } from './update-requirment/update-requirment.component';
import { UpdateComponent } from './update/update.component';
import { CandidateCreationComponent } from './candidate-creation/candidate-creation.component';
import { GetCandidateComponent } from './get-candidate/get-candidate.component';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { GetallInterviewComponent } from './getall-interview/getall-interview.component';
import { CandidateSchedulingComponent } from './candidate-scheduling/candidate-scheduling.component';
import { RequirmentscheduleComponent } from './requirmentschedule/requirmentschedule.component';

@NgModule({
  declarations: [
    AppComponent,
    RequirmentformComponent,
    HomeComponent,
    UpdateRequirmentComponent,
    UpdateComponent,
    CandidateCreationComponent,
    GetCandidateComponent,
    AddInterviewComponent,
    GetallInterviewComponent,
    CandidateSchedulingComponent,
    RequirmentscheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : "", component:HomeComponent},
      {path : "form",component: RequirmentformComponent},
      {path : "update", component: UpdateRequirmentComponent},
      {path : "updateform", component: UpdateComponent},
      {path : "candidateCreation", component: CandidateCreationComponent},
      {path : "getCandidate", component: GetCandidateComponent},
      {path : "scheduleInterview", component: AddInterviewComponent},
      {path : "candidateScheduling", component: CandidateSchedulingComponent},
      {path : "requirmentScheduling", component: RequirmentscheduleComponent},
      {path : "getInterview", component: GetallInterviewComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
