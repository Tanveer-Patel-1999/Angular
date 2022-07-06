import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId=0;
  photoId=0;

  //paramterized 
  //inject activetedRoute
  constructor(private activetedRoute : ActivatedRoute) { 
    //create a instance
    this.activetedRoute.params.subscribe((params)=>
    {

      //create  a variable
      const idValue = params;
      
      this.productId = idValue['productId'];
      this.photoId = idValue['photoId'];

      console.log(params);
    });
  }

  ngOnInit(): void {
  }

}
