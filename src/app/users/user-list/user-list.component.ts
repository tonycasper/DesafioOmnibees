import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { User } from '../user/user';
import { UserService } from '../user/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  private showAddOption: boolean = false
  private addUserForm: FormGroup;

  constructor(    
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
 
  getUsers() {
    this.userService
      .getUsers()
      .subscribe(users => this.users = users);
  }

  addUser(): void {    
    const user = this.addUserForm.value;
    this.userService
    .addUser(user)
    .subscribe(() => this.showAddOption = false);
  }

  handleAdd() {
    if (!this.showAddOption) {
      this.addUserForm = this.formBuilder.group({
        'name': [null, Validators.required],
        'email': [null, Validators.required],        
        'cpf': [null, Validators.required],
        'street': [null],
        'telephone': [null],
      });      
      this.showAddOption = true;
    } else {
      this.showAddOption = false;
    }
  }
}
