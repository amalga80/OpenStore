import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { PrductsListService } from 'src/app/shared/services/prducts-list.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  public products: any;
  public category = '';

  constructor(private prductsListService: PrductsListService,private route: ActivatedRoute, private router: Router
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.category = param.get('category');
    });

    this.prductsListService.productsListShared.subscribe(arg => {
      this.products = arg;
      if (this.category) {
        let filteredProducts = this.products.filter(product => product.category == this.category).map(product => product);
        this.products = filteredProducts;
      }
    });
  }

  syncProducts() {
    this.prductsListService.getProducts();
  }

  updateProduct(id) {
    this.prductsListService.getProduct(id);
  }

}
