import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeAdminComponent } from './home-admin.component';
import { RouterModule } from '@angular/router';
import { HomeAdminRoutingModule } from './home-admin-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeAdminComponent, 
 
  ],
  imports: [
    SharedModule,
    CommonModule,       
    FormsModule,        
    HttpClientModule,   
    RouterModule, 
    HomeAdminRoutingModule      
  ],
  exports: [
    HomeAdminComponent, 
  ],
})
export class HomeAdminModule {}
