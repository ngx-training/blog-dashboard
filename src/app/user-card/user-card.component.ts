import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../services/user/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User | undefined;
  @Output() userChange = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  changeMyEvent() {
    // this.myEvent.emit('Event von UserCardComponent');
  }

}
