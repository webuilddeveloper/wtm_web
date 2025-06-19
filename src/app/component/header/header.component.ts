import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isActiveMarginBTM: boolean = true;
  position: String = "inherit";
  constructor(private router: Router, private route: ActivatedRoute) {


    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // เลื่อนไปบนสุดแบบ smooth
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // this.currentPath = event.urlAfterRedirects;
          if (event.urlAfterRedirects == '/') {
            this.isActiveMarginBTM = false;
            this.position = "absolute"
          }
          console.log('Current path:', event.urlAfterRedirects);
        }
      });
  }

  scrollPosition: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let docElement = document.documentElement;
    let scTop = document.documentElement.clientHeight % 90;
    let scrollTotal = docElement.scrollHeight - docElement.clientHeight;
    let aaa =
      docElement.scrollTop /
      (docElement.scrollHeight - docElement.offsetHeight);
    // document.body.scrollHeight, document.documentElement.scrollHeight,
    // document.body.clientHeight, document.documentElement.clientHeight,
    // document.body.offsetHeight, document.documentElement.offsetHeight
    // console.log('aaa >>>>>>>>>>> ', aaa );
    // console.log('scrollTop ===>>>> ',document.documentElement.scrollTop);
    // console.log('clientHeight ===>>>> ',document.documentElement.clientHeight);
    // console.log('offsetHeight ===>>>> ',document.documentElement.offsetHeight);

    if ((window.pageYOffset || document.documentElement.scrollTop) > 1) {
      this.scrollPosition = true;
    } else if (
      (window.pageYOffset || document.documentElement.scrollTop) < 1
    ) {
      this.scrollPosition = false;
    }
  }

  ngOnInit(): void {

  }
}
