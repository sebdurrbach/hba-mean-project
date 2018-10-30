import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  @ViewChild('drawer') drawer;

  private currentRoute = ['first'];

  private innovationsLinks = [
      { name: 'finance', icon: 'home' },
      { name: 'education', icon: 'home' },
      { name: 'industrie', icon: 'home' },
      { name: 'sante', icon: 'home' },
      { name: 'gouvernance', icon: 'home' },
      { name: 'smart-irrigation', icon: 'home' },
      { name: 'entreprise', icon: 'home' },
      { name: 'assurance', icon: 'home' }
  ];

  private servicesLinks = [
      { name: 'entreprises', icon: 'home' },
      { name: 'start-ups', icon: 'home' }
  ];

  private readonly SHRINK_TOP_SCROLL_POSITION = 100;
  shrinkToolbar = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) {}

  ngOnInit() {

    // ScrollTop only if not between two tabs of services
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute.push(this.router.url);
      const last = this.currentRoute[this.currentRoute.length - 1];
      const beforeLast = this.currentRoute[this.currentRoute.length - 2];
      if (last.includes('services') && beforeLast.includes('services')) {
        return;
      } else {
        document.querySelector('.mat-sidenav-content').scrollTo(0, 0);
      }
    });

    // Add class to main toolbar on scroll
    this.scrollDispatcher.scrolled()
    .pipe(
      map((event: CdkScrollable) => event.getElementRef().nativeElement.scrollTop)
    )
    .subscribe(scrollTop => this.ngZone.run(() => this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false));
  }

  toggleSides(toggle, close) {
    toggle.toggle();
    close.close();
  }

  // Close sidenav on click after 300ms
  difclose() {
    setTimeout(() => {
      this.drawer.toggle();
    }, 300);
  }

}
