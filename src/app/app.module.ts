import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './common/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
