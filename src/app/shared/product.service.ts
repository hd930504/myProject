import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Product[]= [
    new Product(1,"第一个商品",1.99,3.5,"商品描述",["电子商品","硬件设备"]),
    new Product(2,"第二个商品",1.99,2.5,"商品描述",["电子商品","硬件设备"]),
    new Product(3,"第三个商品",1.99,4.5,"商品描述",["电子商品","硬件设备"]),
    new Product(4,"第四个商品",1.99,1.5,"商品描述",["电子商品","硬件设备"]),
    new Product(5,"第五个商品",1.99,3,"商品描述",["电子商品","硬件设备"]),
    new Product(6,"第六个商品",1.99,5,"商品描述",["电子商品","硬件设备"])
  ]

  private comments:Comment[]= [
    new Comment(1,1,'2018-8-8 15:36:57','张三',3,'东西不错'),
    new Comment(2,1,'2018-8-8 15:36:57','张三',3,'东西不错'),
    new Comment(3,1,'2018-8-8 15:36:57','张三',3,'东西不错'),
    new Comment(4,1,'2018-8-8 15:36:57','张三',3,'东西不错'),
    new Comment(5,1,'2018-8-8 15:36:57','张三',3,'东西不错'),
  ]

  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number):Product{
    return this.products.find((product)=>product.id ==id)
  }

  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId ==id)
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){ }
}

export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){ }
}