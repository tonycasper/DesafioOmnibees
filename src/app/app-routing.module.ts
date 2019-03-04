import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddComponent } from './users/user-add/user-add.component';

const routes: Routes = [
  {path:'', redirectTo:'/list', pathMatch:'full'},
  {path:'list', component:UserListComponent},
  {path:'edit/:id', component:UserEditComponent},
  {path:'add', component:UserAddComponent},
  {path:'user/:userName', component: UserListComponent},  
  {path:'**',component:NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
