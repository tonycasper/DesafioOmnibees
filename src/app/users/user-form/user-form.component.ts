import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() userfg;

  constructor() { }

  ngOnInit() {
  }

}
