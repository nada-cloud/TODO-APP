import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatMenuModule} from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { TodosListComponent } from './todos-list.component';
import {MatCardModule} from '@angular/material/card';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { DetailModule } from '../detail/detail.module';
import { DetailComponent } from '../detail/detail.component';
import { SubHeaderModule } from '../sub-header/sub-header-module';

@NgModule({
  declarations: [
    TodosListComponent
  ],
  imports: [
    SubHeaderModule,
    DetailModule,
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    TodosListComponent
  ],
  providers: [],
  bootstrap: [TodosListComponent, DetailComponent]
})
export class TodosListModule { }
