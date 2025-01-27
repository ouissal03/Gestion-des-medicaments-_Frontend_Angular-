import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, SidebarComponent] 
})
export class SharedModule {}
