import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ShopService } from 'src/app/services/shop.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  template: `
    <ul>
    <li *ngFor="let menu of menuContainer | paginate: { itemsPerPage: 5, currentPage: page }"> ... </li>
  </ul>

  <pagination-controls (pageChange)="page = $event"></pagination-controls>
  `
})
export class MenuComponent implements OnInit {
  term:any;
  page:any;
  loading = true;
  menuContainer :any [] =[];
  CategoriesContainer:any [] =[];
  imagePerfix = 'https://digitalbondmena.com/EatsCrispy/products/';
  constructor(private _ShopService:ShopService , private _AuthService:AuthService) { }
  addToCartForm:FormGroup = new FormGroup({
    'userId': new FormControl(this._AuthService.userId,[Validators.required , Validators.email]),
    'productId': new FormControl('',[Validators.required , Validators.minLength(9)]),
    'quantity': new FormControl('',[Validators.required , Validators.minLength(9)]),
  })
  ngOnInit(): void {
    this.getShop()
  }
  getShop(){
    this._ShopService.getMenu().subscribe((response)=>{
      this.CategoriesContainer = response.category;
      this.menuContainer = response.Products;
      this.loading = false;
    })
  }
  ngSubmitAddToCart(addToCartForm:any){
    console.log(addToCartForm.value);
  }
}
