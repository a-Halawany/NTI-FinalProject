import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-adminshowsingleteacher',
  templateUrl: './adminshowsingleteacher.component.html',
  styleUrls: ['./adminshowsingleteacher.component.css'],
})
export class AdminshowsingleteacherComponent implements OnInit {
  constructor(private _data: DataService, private _route: ActivatedRoute) {}
  id: string = this._route.snapshot.params['id'];
  teacher: any;
  isLoaded: Boolean = false;
  getTeacher(id: string) {
    this._data.adminGetTeacher(id).subscribe(
      (res) => {
        this.teacher = res.data[0];
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.isLoaded = true;
      }
    );
  }

  ngOnInit(): void {
    this.getTeacher(this.id);
  }
}
