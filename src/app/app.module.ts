import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  NavComponent,
  RegisterComponent,
  UserListComponent,
  ListsComponent,
  ProfileEditComponent,
  HomeComponent,
  AdminConfigurationComponent,
  EnemyStatsComponent,
  WeaponStatsComponent
} from './Components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared.module';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { CommonModule } from '@angular/common';



/*import { AuthInterceptor } from './services/users.service';*/



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ListsComponent,
    UserListComponent,
    InterceptorsComponent,
    ProfileEditComponent,
    AdminConfigurationComponent,
    EnemyStatsComponent,
    WeaponStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
