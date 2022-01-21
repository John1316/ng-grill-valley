import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './content/page/about-us/about-us.component';
import { LoginComponent } from './content/page/auth/login/login.component';
import { NotfoundComponent } from './content/page/auth/notfound/notfound.component';
import { RegisterComponent } from './content/page/auth/register/register.component';
import { CartComponent } from './content/page/cart/cart.component';
import { ContactUsComponent } from './content/page/contact-us/contact-us.component';
import { HomeComponent } from './content/page/home/home.component';
import { ItemDetailsComponent } from './content/page/item-details/item-details.component';
import { MenuComponent } from './content/page/menu/menu.component';
import { AddressComponent } from './content/page/profiles/address/address.component';
import { NewAddressComponent } from './content/page/profiles/new-address/new-address.component';
import { NewPickupComponent } from './content/page/profiles/new-pickup/new-pickup.component';
import { RegisterCompleteComponent } from './content/success/register-complete/register-complete.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' ,pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about-us' , component:AboutUsComponent},
  {path:'contact-us' , component:ContactUsComponent},
  {path:'menu' , component:MenuComponent},
  {path:'menu/:id' , component:ItemDetailsComponent},
  {path:'item-details' , component:ItemDetailsComponent},
  {path:'address' , component:AddressComponent},
  {path:'new-address' , component:NewAddressComponent},
  {path:'new-pickup' , component:NewPickupComponent},
  {path:'register-complete' , component:RegisterCompleteComponent},
  {path:'cart' , component:CartComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'register' , component:RegisterComponent},
  {path: '**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
