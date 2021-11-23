import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: {
    icon: any| ''; display: string; path: string; expand?: any} | undefined;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.menuItem);
  }
}
