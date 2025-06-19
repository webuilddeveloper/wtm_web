import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-and-service',
  templateUrl: './product-and-service.component.html',
  styleUrls: ['./product-and-service.component.scss']
})
export class ProductAndServiceComponent {

  constructor(private router: Router) {

  }
  productList: any = [
    {
      code: "0",
      title: "ECU และชุดอุปกรณ์ติดตั้ง (LNG Convertion)",
      description: "รายละเอียดคร่าว ๆ",
      imageUrl: "./../../../assets/img/lng-mock.png"
    },
    {
      code: "1",
      title: "ถังก๊าซ LNG มาตรฐาน (LNG Cylinder)",
      description: "รายละเอียดคร่าว ๆ",
      imageUrl: "./../../../assets/img/lng-mock.png",
      image: [

      ]
    },
  ];

  gotoDetails(param: any): void {
    this.router.navigate(["product-and-service-details", param], {
      // skipLocationChange: true,
    });
  }
}
