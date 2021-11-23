import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class XLSXService {
  getData: any;

  constructor() {
  }

  readFile = (sheetName: any) => {
    const url = '/assets/sheets/template.xlsx';
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'arraybuffer';
    let sheet: any;
    req.onload = (e) => {
      const data = new Uint8Array(req.response);
      const workbook = XLSX.read(data, {type: 'array'});
      sheet = workbook.Sheets[sheetName];
    };
    req.send();
    req.onloadend = ev => {
      this.getData = XLSX.utils.sheet_to_json(sheet, {raw: true});
    };
  }

  getAllDataBySheet = (sheet: any) => {
    this.getData = [];
    this.readFile(sheet);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.getData);
      }, performance.now());
    });
  }
}
