import { Component, Input, OnInit } from '@angular/core';
import { PrductsListService } from '../../services/prducts-list.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public productTypes:any = []

  public products: any = [];
  public productsCount = 0;

  constructor(private prductsListService: PrductsListService) { }

  ngOnInit(): void {
    let _this = this;
    this.prductsListService.productsListShared.subscribe(products => {
      this.products = products;
     // this.prductTypes = [...new Set(products.map(product => product.category))];
      this.productsCount = this.products.length;

     
      products.forEach(function(item){
        var i = _this.productTypes.findIndex(x => x.category == item.category);
        if(i <= -1){
          _this.productTypes.push({category: item.category, count: 0});
        }
      });

      this.productTypes.forEach(type => {
          products.forEach(element => {
              if (element.category == type.category) {
                type.count =  type.count + 1;
              }
          });
      });
    });

  }

}
