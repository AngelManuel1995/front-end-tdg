import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { PagesModule } from './pages/pages.module'
import { APP_ROUTES } from './app.routes'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent, } from './login/login.component'
import { RegisterComponent } from "./login/register.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,//Queda
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
