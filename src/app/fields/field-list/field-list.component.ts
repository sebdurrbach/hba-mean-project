import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {

  private fields = [
    { name: 'finance', icon: 'alarm', link: '/innovations/finance', color: 'yellow' },
    { name: 'education', icon: 'android', link: '/innovations/education', color: 'red' },
    { name: 'industrie', icon: 'backup', link: '/innovations/industrie', color: 'green' },
    { name: 'santé', icon: 'copyright', link: '/innovations/sante', color: 'orange' },
    { name: 'gouvernance', icon: 'face', link: '/innovations/gouvernance', color: 'pink' },
    { name: 'smart-irrigation', icon: 'language', link: '/innovations/smart-irrigation', color: 'blue' },
    { name: 'entreprise', icon: 'pets', link: '/innovations/entreprise', color: 'lightblue' },
    { name: 'assurance', icon: 'schedule', link: '/innovations/assurance', color: 'lightgreen' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
