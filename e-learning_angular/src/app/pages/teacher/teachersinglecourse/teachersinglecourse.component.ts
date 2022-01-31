import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-teachersinglecourse',
  templateUrl: './teachersinglecourse.component.html',
  styleUrls: ['./teachersinglecourse.component.css']
})
export class TeachersinglecourseComponent implements OnInit {

  constructor(private _service:DataService,private _route:ActivatedRoute,private _sanitizer:DomSanitizer) { }

  iframLink(url:string):any{
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  course:any={}
  isLoaded=false
  ngOnInit(): void {
    this._service.getSubject(this._route.snapshot.paramMap.get("subjectId")).subscribe(
      res=>{this.course=res},
      e=>{},
      ()=>{this.isLoaded=true})
    }
}
