import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
import { DefaultService } from 'src/app/services/default.service';
import { ShopService } from 'src/app/services/shop.service';
import SwiperCore , {Navigation, Pagination, Scrollbar, A11y , Autoplay} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


})
export class HomeComponent implements OnInit {

  sliders:any = [];
  menus: any[] =[];
  imagePrefix = "https://digitalbondmena.com/EatsCrispy/sliders/";
  imagePrefixMenu = 'https://digitalbondmena.com/EatsCrispy/products/';
  menuLastestItems:any[]= [];
  loading = true;

  constructor(private _DefaultService:DefaultService , private _ShopService:ShopService) {}

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  galleryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  productsSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
testominalsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 3
      }
    },
    nav: false
  }
  ngOnInit(): void {
    this.getSliders();
    this.getMenu();
  }
  getMenu(){
    this._ShopService.getMenu().subscribe((response)=>{
      this.menus = response.Products;
      this.loading = false;
    })
  }

  getSliders(){
    this._DefaultService.getSliders().subscribe((response)=>{
      this.sliders = response;
      this.loading = false;
    })
  }
}
