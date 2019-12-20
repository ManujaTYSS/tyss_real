import { Component, OnInit } from '@angular/core';
import { RequirmentService } from '../requirment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirmentschedule',
  templateUrl: './requirmentschedule.component.html',
  styleUrls: ['./requirmentschedule.component.css']
})
export class RequirmentscheduleComponent implements OnInit {

  constructor( private RequirmentService:RequirmentService, private router:Router) { }

  ngOnInit() {
  }
  addreqschedule(reqform){
    console.log(reqform.value);
    this.RequirmentService.addInterview(reqform.value).subscribe(res => {
      console.log('Interview scheduled  successfully');
      alert('Interview scheduled  successfully...!')
      this.router.navigateByUrl("getInterview");
      reqform.reset();
   }, err => {
      console.log('Interview scheduling failed');
   });
  }
}
