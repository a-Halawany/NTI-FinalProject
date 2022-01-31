import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-adminshowteachers',
  templateUrl: './adminshowteachers.component.html',
  styleUrls: ['./adminshowteachers.component.css'],
})
export class AdminshowteachersComponent implements OnInit {
  constructor(private _data: DataService, private router: Router) {}
  getAllTeachers() {
    this._data.getAllTeachers().subscribe(
      (res) => {
        this.allTeachers = res.data;
      },
      (e) => {
        this.router.navigateByUrl('/admin/login');
      },
      () => {
        this.isloaded = true;
      }
    );
  }
  isloaded: Boolean = false;
  allTeachers: any[] = [];
  ngOnInit(): void {
    this.getAllTeachers();
  }
  blockTeacher(id: string) {
    this._data.blockTeacher(id).subscribe(
      (res) => {
        console.log(res);
      },
      (e) => {
        console.log(e.message);
      },
      () => {
        this.getAllTeachers();
      }
    );
  }
  activeTeacher(id: string) {
    this._data.activeTeacher(id).subscribe(
      (res) => {
        console.log(res);
      },
      (e) => {
        console.log(e.message);
      },
      () => {
        this.getAllTeachers();
      }
    );
  }
}
