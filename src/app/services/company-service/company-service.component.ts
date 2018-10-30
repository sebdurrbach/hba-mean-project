import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-company-service',
  templateUrl: './company-service.component.html',
  styleUrls: ['./company-service.component.scss']
})
export class CompanyServiceComponent implements OnInit {

  header = {
    title: 'Nos services pourles entreprises et les start-ups',
    subtitle: 'Some bla bla bla bla',
    background: 'lightblue'
  };

  tabSelected: string;
  currentRoute;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tabSelected = this.route.snapshot.params['target'] === 'start-ups' ? '1' : '0';
    this.route.params.subscribe((params: Params) => {
      this.tabSelected = params['target'] === 'start-ups' ? '1' : '0';
    });
  }

  updateLink(event) {
    if (event.index === 1) {
      this.router.navigate(['/services/start-ups']);
    } else {
      this.router.navigate(['/services/entreprises']);
    }
  }

}
