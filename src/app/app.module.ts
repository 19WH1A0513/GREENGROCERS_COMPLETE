import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { HeaderComponent } from './header/header.component';
import { GreenComponent } from './green/green.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FruitsComponent } from './fruits/fruits.component';
import { CartComponent } from './cart/cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MyordersComponent } from './myorders/myorders.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserhelpComponent } from './userhelp/userhelp.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    LoginComponent,
    DisplayComponent,
    HeaderComponent,
    GreenComponent,
    AboutComponent,
    FruitsComponent,
    CartComponent,
    UserProfileComponent,
    MyordersComponent,
    UserhelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    NoopAnimationsModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
