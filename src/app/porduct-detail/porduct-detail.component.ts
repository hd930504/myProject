import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-porduct-detail',
  templateUrl: './porduct-detail.component.html',
  styleUrls: ['./porduct-detail.component.css']
})
export class PorductDetailComponent implements OnInit {

  product:Product;
  comments:Comment[];
  constructor(private routeInfo:ActivatedRoute,
              private productService:ProductService
  ) { }

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params['productId'];

    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

}
