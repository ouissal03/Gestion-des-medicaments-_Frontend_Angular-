import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsComponent } from './notifications.component';
import { RouterModule } from '@angular/router';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    NotificationsComponent, 
 
  ],
  imports: [
    SharedModule,
    CommonModule,       
    FormsModule,        
    HttpClientModule,   
    RouterModule, 
    NotificationsRoutingModule      
  ],
  exports: [
    NotificationsComponent, 
  ],
})
export class NotificationsModule {}
