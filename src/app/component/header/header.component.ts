import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  scrollPosition: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let docElement = document.documentElement;
    let scTop = (document.documentElement.clientHeight % 90);
    let scrollTotal = docElement.scrollHeight - docElement.clientHeight
    let aaa = docElement.scrollTop / (docElement.scrollHeight - docElement.offsetHeight);
    // document.body.scrollHeight, document.documentElement.scrollHeight,
    // document.body.clientHeight, document.documentElement.clientHeight,
    // document.body.offsetHeight, document.documentElement.offsetHeight
    // console.log('aaa >>>>>>>>>>> ', aaa );
    // console.log('scrollTop ===>>>> ',document.documentElement.scrollTop);
    // console.log('clientHeight ===>>>> ',document.documentElement.clientHeight);
    // console.log('offsetHeight ===>>>> ',document.documentElement.offsetHeight);


    if ((window.pageYOffset || document.documentElement.scrollTop) > 90) {
      this.scrollPosition = true;
    }
    else if ((window.pageYOffset || document.documentElement.scrollTop) < 90) {
      this.scrollPosition = false;
    }
  }
}
