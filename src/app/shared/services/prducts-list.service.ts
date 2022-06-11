import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrductsListService {

  private REST_API_SERVER = "https://captello.firebaseio.com";
  public productsList: any = [];
  public subject = new Subject<any>();
  private productsSource = new  BehaviorSubject(this.productsList);
  productsListShared = this.productsSource.asObservable();


  constructor(private httpClient: HttpClient) {
    let initProducts = localStorage.getItem('openStoreProducts');
    if(initProducts) {
    this.updateProducts(JSON.parse(initProducts));
    }
    else {
      this.getProducts();
    }
   }

 
  updateProducts(products: any) {
    this.productsSource.next(products);}



  public getProducts(){
    this.httpClient.get(this.REST_API_SERVER + '/products.json').subscribe(arg => {
      this.productsList = arg;
      this.updateProducts(this.productsList);
    });
   
  }

  public getProduct(id) {
    this.httpClient.get(this.REST_API_SERVER + '/products/' + id +'.json').subscribe(product => {
        this.productsList.forEach(element => {
          if (element.id === id) {
            element = product;
          }
        });
       this.updateProducts(this.productsList);
    })
  }
}
