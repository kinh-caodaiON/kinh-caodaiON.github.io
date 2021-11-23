import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caodaion-apps',
  templateUrl: './caodaion-apps.component.html',
  styleUrls: ['./caodaion-apps.component.scss']
})
export class CaodaionAppsComponent implements OnInit {
  calendarPath = 'https://lich-caodaion.github.io/';
  kinhPath = 'https://kinh-caodaion.github.io/';
  caodaionPath = 'https://dev-caodaion.github.io/';

  constructor() {
  }

  ngOnInit(): void {
  }

}
