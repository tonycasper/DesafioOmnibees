import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,    
    UsersModule,
    ErrorsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
