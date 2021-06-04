import { Component, OnInit } from '@angular/core';
import { User } from '../services/user/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User = { username: 'Gregor Doroschenko', email: 'info@gregor-doroschenko.de' };

  constructor() { }

  ngOnInit(): void {
  }

  getMyEvent(value: string): void {
    console.log('my value', value);
  }

}
