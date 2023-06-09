import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosListModule } from './todos-list/todos-list.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SubHeaderModule } from './sub-header/sub-header-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    SubHeaderModule,
    TodosListModule,
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent, TodosListComponent]
})
export class AppModule { }
