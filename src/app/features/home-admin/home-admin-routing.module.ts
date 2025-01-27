import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';


const routes: Routes = [
    {
      path: '',
      component: HomeAdminComponent,
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
export class HomeAdminRoutingModule {}
