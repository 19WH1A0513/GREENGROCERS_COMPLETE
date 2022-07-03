import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { DisplayComponent } from './display/display.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GreenComponent } from './green/green.component';
import { AboutComponent } from './about/about.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CartComponent } from './cart/cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { UserhelpComponent } from './userhelp/userhelp.component';


const routes: Routes = [ 
  {path:'',component:LoginComponent},
  //{path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  //{path:'display',component:DisplayComponent},
  {path:'green', component:GreenComponent},
  {path:'about', component:AboutComponent},
  {path:'fruits',component:FruitsComponent},
  {path:'cart', component:CartComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'myorders',component:MyordersComponent},
  {path:'userhelp',component:UserhelpComponent},

  {path:'home-page',
  children:[
    {path:'',component:HomePageComponent},
    {path:'register', canActivate:[AuthGuard],component:RegisterComponent},
    //{path:'display',canActivate:[AuthGuard],component:DisplayComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
