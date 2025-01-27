import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArchiveComponent } from './archive.component';
import { RouterModule } from '@angular/router';
import { ArchiveRoutingModule } from './archive-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ArchiveComponent, 
 
  ],
  imports: [
    SharedModule,
    CommonModule,       
    FormsModule,        
    HttpClientModule,   
    RouterModule, 
    ArchiveRoutingModule      
  ],
  exports: [
    ArchiveComponent, 
  ],
})
export class ArchiveModule {}
