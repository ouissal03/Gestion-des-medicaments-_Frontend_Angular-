import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home-admin',
    loadChildren: () =>
      import('./features/home-admin/home-admin.module').then((m) => m.HomeAdminModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'update-profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'archive',
    loadChildren: () =>
      import('./features/archive/archive.module').then((m) => m.ArchiveModule),
  }/*,
  {
    path: 'notifications',
    loadChildren: () =>
      import('./features/notifications/notifications.module').then((m) => m.NotificationsModule),
  }*/,
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
