import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card-lg',
  templateUrl: './product-card-lg.component.html',
  styleUrls: ['./product-card-lg.component.scss'],
  providers: []

})
export class ProductCardLgComponent implements OnInit {

  @Input() product: any = [];
  @Output() updateProduct = new EventEmitter();
  constructor() {

   }

  ngOnInit(): void {
  }

  syncProduct(productId) {
    this.updateProduct.emit(productId);
  }

}
