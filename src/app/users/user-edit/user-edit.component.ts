import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() user:User;  

  private userFormGroup: FormGroup;  

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private formBuilder: FormBuilder,    
  ) {}

  ngOnInit() {
      this.getUser();
  }

  createForm() {
    this.userFormGroup = this.formBuilder.group({
      'name': [this.user.name, Validators.required],
      'email': [this.user.email, Validators.required],
      'cpf': [this.user.cpf, Validators.required],
      'street': [this.user.street],      
      'telephone': [this.user.telephone],
    });
  }

  //ok
  getUser(){    
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
      this.userService.getUser(id)
      .subscribe(user=> {
        this.user = user[0];
        this.createForm();
      });
  }
  
  //ok
  goBack(){    
    this.location.back();
  }
  
  //ok
  delete(user:User){
    this.userService.deleteUser(user)
    .subscribe(() =>this.goBack());    
  }
  
  //ok
  update(){    
    const user = this.userFormGroup.value;
    user._id = this.user._id;  
    this.userService.updateUser(user)    
    .subscribe(() => this.goBack());    
  }

}
