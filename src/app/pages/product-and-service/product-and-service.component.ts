import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProvider } from 'src/app/shared/service-provider.service';

@Component({
  selector: 'app-product-and-service',
  templateUrl: './product-and-service.component.html',
  styleUrls: ['./product-and-service.component.scss']
})
export class ProductAndServiceComponent {

  constructor(private router: Router, private serviceProvider: ServiceProvider) {

  }
  performanceList: any = [];
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

  ngOnInit(): void {
    this.productRead();
  }

  gotoDetails(param: any): void {
    this.router.navigate(["product-and-service-details", param], {
      // skipLocationChange: true,
    });
  }

  productRead() {
    this.serviceProvider
      .post('m/product/read', { limit: 999 })
      .subscribe((data) => {
        let model: any = {};
        model = data;
        console.log(model.objectData);

        this.performanceList = model.objectData;
      });
  }

  gotoPerformanceDetails(param: String): void {
    this.router.navigate(["performance-details", param], {
      // skipLocationChange: true,
    });
  }
}
