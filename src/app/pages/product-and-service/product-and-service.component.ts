import { Component } from '@angular/core';

@Component({
  selector: 'app-product-and-service',
  templateUrl: './product-and-service.component.html',
  styleUrls: ['./product-and-service.component.scss']
})
export class ProductAndServiceComponent {
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
      imageUrl: "./../../../assets/img/lng-mock.png"
    },

  ];
}
