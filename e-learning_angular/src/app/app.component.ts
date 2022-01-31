import { Component } from '@angular/core';
import { AuthService } from './providers/services/auth.service';
import { DataService } from './providers/services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public _data: DataService, public _auth: AuthService) {}
}
