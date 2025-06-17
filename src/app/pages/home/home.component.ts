import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  serviceList: any = [
    {
      title: "ติดตั้ง",
      describe: "บริการรับติดแก๊ส LNG รถบรรทุก",
      icon: "./../../../assets/icons/icon-install.png"
    },
    {
      title: "ตรวจสภาพ",
      describe: "บริการรับตรวจเช็คสภาพ และซ่อมบำรุงระบบ",
      icon: "./../../../assets/icons/icon-maintain.png"
    },
    {
      title: "จดทะเบียน",
      describe: "บริการแนะนำการจดทะเบียน สำหรับรถใช้ก๊าช LNG",
      icon: "./../../../assets/icons/icon-recomance.png"
    },
    {
      title: "จัดจำหน่าย",
      describe: "บริการจัดจำหน่ายชุดอุปกรณ์ถังก๊าช ชิ้นส่วน และอะไหล่ต่างๆ",
      icon: "./../../../assets/icons/icon-sale.png"
    },
    {
      title: "สินเชื่อ",
      describe: "บริการให้คำปรึกษาด้านสินเชื่อสำหรับการติดตั้งแก๊ส",
      icon: "./../../../assets/icons/icon-credit.png"
    },
    {
      title: "อบรม",
      describe: "บริการคอร์สฝึกอบรมเกี่ยวกับ LNG",
      icon: "./../../../assets/icons/icon-course.png"
    },
  ];

  newsList: any = [
    {
      code: "1",
      title: "ข่าวสาร1;lsjflbjq';erlkgmbwnlfnbvlsjnopwrjkgl;rnlkbnmlrf;mbl;rejopnjwr",
      describe: "รายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าว",
      imageUrl: "./../../../assets/img/div-service-bg.png"
    },
    {
      code: "2",
      title: "ข่าวสาร2",
      describe: "รายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าว",
      imageUrl: "./../../../assets/img/logoMain.png"
    },
    {
      code: "3",
      title: "ข่าวสาร3",
      describe: "รายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าว",
      imageUrl: "./../../../assets/img/logoMain.png"
    },
    {
      code: "4",
      title: "ข่าวสาร4",
      describe: "รายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าว",
      imageUrl: "./../../../assets/img/logoMain.png"
    },
    {
      code: "5",
      title: "ข่าวสาร5",
      describe: "รายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าวรายละเอียดข่าว",
      imageUrl: "./../../../assets/img/logoMain.png"
    },
  ];
}
