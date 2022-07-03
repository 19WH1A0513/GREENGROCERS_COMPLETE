import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  fruits : any = [];
  public grandTotal !: number;
  public quantity:number=1;
  public total !: number;
  i=1
  plus(){
    this.i++;
    this.quantity=this.i;
  }
  minus(){
    if(this.i!=1){
      this.i--;
      this.quantity=this.i;
  }
  }
  constructor(private cartService : CartService) {
    
   }

  ngOnInit(): void {
    this.cartService.getFruits()
    .subscribe(res=>{
      this.fruits = res;
      // this.total = this.cartService.getTotal();
      this.grandTotal = this.cartService.getTotalPrice();

    })
    }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
