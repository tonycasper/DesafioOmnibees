import { NgModule } from '@angular/core';
import { HttpClientModule } from '@Angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './user-list/users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserService } from './user-service.service';


@NgModule({
    declarations: [       
        UserListComponent,
        UsersComponent,
        UserEditComponent,
        UserFormComponent,
        UserAddComponent    
    ],
    imports:[
        HttpClientModule,
        CommonModule,
        AppRoutingModule,  
        FormsModule,
        ReactiveFormsModule        
    ],
    providers: [
        UserListComponent
    ],
    exports:[
        UserService
    ]

})

export class UsersModule {}