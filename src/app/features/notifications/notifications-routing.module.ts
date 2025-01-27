import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './notifications.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';


const routes: Routes = [
    {
      path: '',
      component: NotificationsComponent,
      children: [
        { path: 'navbar', component: NavbarComponent },
        { path: 'sidebar', component: SidebarComponent }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {}
