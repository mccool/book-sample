import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.scss' ]
})
export class CartComponent implements OnInit {
  totalCost = '0';
  count = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.items.subscribe(value => {
      this.count = value.length;
      this.totalCost = this.cartService.totalCost.toFixed(2);
    });
  }
}
