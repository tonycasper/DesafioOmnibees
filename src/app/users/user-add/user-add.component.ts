import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  
  private addUserForm: FormGroup;

  constructor (private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  
  createForm() {
    this.addUserForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],      
      'cpf': [null, Validators.required],
      'street': [null],
      'telephone': [null]
    });
  } 

}
