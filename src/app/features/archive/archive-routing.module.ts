import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';


const routes: Routes = [
    {
      path: '',
      component: ArchiveComponent,
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
export class ArchiveRoutingModule {}
