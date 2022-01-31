import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../../interfaces/register';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public flag = true;
  public adminData: any;
  constructor(private _http: HttpClient) {}

  postRegister(data: Register): Observable<any> {
    return this._http.post(`${environment.URL}/register`, data);
  }

  postLogin(data: any): Observable<any> {
    return this._http.post(`${environment.URL}/login`, data);
  }
  postAdmin(adminData: any): Observable<any> {
    return this._http.post(`${environment.URL}/admin/add-admin`, adminData);
  }
  getAllTeachers(): Observable<any> {
    return this._http.get(`${environment.URL}/admin/teachers`);
  }

  postStudentProfile(id: any): Observable<any> {
    return this._http.get(`${environment.URL}/student/profile/${id}`);
  }
  getTeacher(teacherId: any): Observable<any> {
    return this._http.get(
      `${environment.URL}/teacher/showTeacherProfile/${teacherId}`
    );
  }
  getSubjects(teacherId: any): Observable<any> {
    return this._http.get(`${environment.URL}/teacher/subjects/${teacherId}`);
  }

  postEditTeacherProfile(data: any, teacherId: any): Observable<any> {
    return this._http.post(
      `${environment.URL}/teacher/editTeacherProfile/${teacherId}`,
      data
    );
  }
  blockTeacher(id: string): Observable<any> {
    return this._http.get(`${environment.URL}/admin/block-teacher/${id}`);
  }
  activeTeacher(id: string): Observable<any> {
    return this._http.get(`${environment.URL}/admin/active-teacher/${id}`);
  }

  adminGetTeacher(id: string): Observable<any> {
    return this._http.get(`${environment.URL}/admin/teacher/${id}`);
  }
  postEditStudent(id: any, data: any): Observable<any> {
    return this._http.post(`http://localhost:3000/student/edit/${id}`, data);
  }
  getAllTeacherCourses(id: any): Observable<any> {
    return this._http.get(`http://localhost:3000/teacher/subjects/${id}`);
  }
  getSubject(id: any): Observable<any> {
    return this._http.get(`http://localhost:3000/teacher/single/${id}`);
  }
}
