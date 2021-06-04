import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [DashboardComponent, AdminComponent, BlogEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class AdminModule { }
