import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XLSXService } from 'src/app/shared/services/xlsx.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  kinhs: any[] = [];

  constructor(public router: Router, public xlsxService: XLSXService) { }

  ngOnInit(): void {
    this.xlsxService.getAllDataBySheet('kinh').then((res: any) => {
      this.kinhs = res
    });
  }
}
