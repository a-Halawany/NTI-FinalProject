import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css']
})
export class TeacherprofileComponent implements OnInit {

  constructor(private service:DataService,private _route:ActivatedRoute) { }
  isLoaded=false
  teacher:any={}
  subjects:any[]=[]
  ngOnInit(): void {
    this.service.getTeacher(this._route.snapshot.paramMap.get("id")).subscribe(
      res=>{this.teacher=res.data;console.log(res.data);}
      )
    this.service.getSubjects(this._route.snapshot.paramMap.get("id")).subscribe(
      res=>{this.subjects=res;console.log(res);},
      e=>{},
      ()=>{this.isLoaded=true}
    )
  }


}
