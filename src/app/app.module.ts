import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeAdminModule } from './features/home-admin/home-admin.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule ,
    HttpClientModule,
    HomeAdminModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
