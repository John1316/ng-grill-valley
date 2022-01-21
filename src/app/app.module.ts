import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './content/page/auth/notfound/notfound.component';
import { RegisterComponent } from './content/page/auth/register/register.component';
import { LoginComponent } from './content/page/auth/login/login.component';
import { MenuComponent } from './content/page/menu/menu.component';
import { HomeComponent } from './content/page/home/home.component';
import { HeaderComponent } from './content/shared/header/header.component';
import { FooterComponent } from './content/shared/footer/footer.component';
import { AboutUsComponent } from './content/page/about-us/about-us.component';
import { ContactUsComponent } from './content/page/contact-us/contact-us.component';
import { ItemDetailsComponent } from './content/page/item-details/item-details.component';
import { MiniCartComponent } from './content/shared/mini-cart/mini-cart.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from "@angular/common/http";
import { SearchPipe } from './pipes/search.pipe';
import { NgxPaginationModule } from "ngx-pagination";
import { CarouselModule  } from "ngx-owl-carousel-o";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from "swiper/angular";
import { AddressComponent } from './content/page/profiles/address/address.component';
import { CartComponent } from './content/page/cart/cart.component';
import { RegisterCompleteComponent } from './content/success/register-complete/register-complete.component';
import { NewAddressComponent } from './content/page/profiles/new-address/new-address.component';
import { NewPickupComponent } from './content/page/profiles/new-pickup/new-pickup.component';
import { TokenInterceptor } from './token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ItemDetailsComponent,
    MiniCartComponent,
    SearchPipe,
    AddressComponent,
    CartComponent,
    RegisterCompleteComponent,
    NewAddressComponent,
    NewPickupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
