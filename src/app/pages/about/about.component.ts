import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from 'src/app/shared/service-provider.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private serviceProvider: ServiceProvider) {}
  listEmployee: any = [];

  ngOnInit(): void {
    this.callRead();
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
}
