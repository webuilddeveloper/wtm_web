import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ServiceProvider } from 'src/app/shared/service-provider.service';

@Component({
  selector: 'app-product-and-service',
  templateUrl: './product-and-service.component.html',
  styleUrls: ['./product-and-service.component.scss']
})
export class ProductAndServiceComponent {

  isEquipmentSelect: string = "0";
  modelEquipment: any = {};
  constructor(private router: Router, private serviceProvider: ServiceProvider, public translate: TranslateService) {}
  performanceList: any = [];
  equipmentList: any = [
    {
      code: "0",
      title: "กล่องควบคุมการทำงาน P&C",
      description: "รายละเอียดคร่าวๆ กล่องกล่องควบคุมการทำงาน P&C",
      imageUrl: "./../../../assets/img/lng-mock.png"
    },
    {
      code: "1",
      title: "ถังรักษาอุณหภูมิ (CNG,LNG)",
      description: "รายละเอียดคร่าว ๆ ถังรักษาอุณหภูมิ (CNG,LNG)",
      imageUrl: "./../../../assets/img/lng-mock.png"
    },
    {
      code: "2",
      title: "Sensors",
      description: "รายละเอียดคร่าว ๆ Sensors",
      imageUrl: "./../../../assets/img/lng-mock.png"
    },
    {
      code: "3",
      title: "หัวฉีด",
      description: "รายละเอียดคร่าว ๆ หัวฉีด",
      imageUrl: "./../../../assets/img/lng-mock.png"
    },
    {
      code: "4",
      title: "อุปกรณ์เปลี่ยนสถานะและควบคุมแรงดัน",
      description: "รายละเอียดคร่าว ๆ อุปกรณ์เปลี่ยนสถานะและควบคุมแรงดัน",
      imageUrl: "./../../../assets/img/lng-mock.png"
    },
  ];

  ngOnInit(): void {
    this.productRead();
    this.modelEquipment = this.equipmentList.find((x: any) => x.code == this.isEquipmentSelect);

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

  viewDetail(param: any) {
    this.modelEquipment = param;
    this.isEquipmentSelect = param.code;
  }
}
