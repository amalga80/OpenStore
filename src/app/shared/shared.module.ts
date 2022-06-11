import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardLgComponent } from './components/product-card-lg/product-card-lg.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    ProductCardLgComponent,
    SideBarComponent
  ],
  exports: [
    HeaderComponent,
    ProductCardLgComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
