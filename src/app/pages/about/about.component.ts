import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceProvider } from 'src/app/shared/service-provider.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private serviceProvider: ServiceProvider, public translate: TranslateService) {}
  listEmployee: any = [];
  listCertificate: any = [];
  aboutMeModel: any = {};

  ngOnInit(): void {
    this.callRead();
    this.readAboutMe();
    this.readCertificate();
  }

  callRead() {
    this.serviceProvider
      .post('m/employee/read', { limit: 999 })
      .subscribe((data) => {
        let model: any = {};
        model = data;
        this.listEmployee = model.objectData;
      });
  }

  readAboutMe() {
    this.serviceProvider
      .post('aboutUs/read', {})
      .subscribe((data) => {
        let model: any = {};
        model = data;
        this.aboutMeModel = model.objectData[0];
      });
  }

  readCertificate() {
    this.serviceProvider
      .post('certificate/read', {permission: "all"})
      .subscribe((data) => {
        let model: any = {};
        model = data;
        this.listCertificate = model.objectData;
      });
  }


}
