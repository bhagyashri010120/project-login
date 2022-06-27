import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productServices: ProductService) { }

  products: Array<Product> = new Array<Product>();
  ngOnInit(): void {

    this._productServices.getProducts().subscribe(res => this.products = res, err => console.log(err))
  }

}