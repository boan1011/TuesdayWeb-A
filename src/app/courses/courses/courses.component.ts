import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../../login/login/login.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class coursesComponent implements OnInit {
  
  constructor(
    public httpClient: HttpClient,
  ) { }

  private sum: number;
  selectCourde: string = "";

  ngOnInit() {
    this.sum = LoginComponent.SumValue();
    console.log('test', this.sum );
  }
  
  


  addAjax(): void {
    const ID: string = "C001";
    const url = `http://boanweb.azurewebsites.net/Item`;
    this.httpClient.post(url, {
      "ID": ID + "C01",
      "Name": "Ajax",
      "Unit": "",
      "Category": "",
      "Price": 100,
      "Description": "Ajax又稱非同步JavaScript和XML是一種創建互動式網頁(RWD)的網頁開發技術",
      "Barcode": "",
      "SafetyStock": 10,
      "Str1": "190111-190220",
      "Str2": "",
      "Str3": "",
      "Str4": "",
      "Int1": 0,
      "Int2": 0,
      "Mon1": 0,
      "Mon2": 0,
      "date": "20180121",
    }).subscribe((url) => {
      console.log('OK', this.selectCourde);
    })
  }

  addJava(): void {
    const ID: string = "C001";
    const url = `http://boanweb.azurewebsites.net/Item`;

    this.httpClient.post(url, {
      "ID": ID + "C02",
      "Name": "JAVA",
      "Unit": "",
      "Category": "",
      "Price": 100,
      "Description": "Java擁有cross-platform、OOP特性廣泛應用於Web應用開發和行動APP開發",
      "Barcode": "",
      "SafetyStock": 10,
      "Str1": "190121-190230",
      "Str2": "",
      "Str3": "",
      "Str4": "",
      "Int1": 0,
      "Int2": 0,
      "Mon1": 0,
      "Mon2": 0,
      "date": "20180121",
    }).subscribe((url) => {
      console.log('OK', this.selectCourde);
    })
  }

  addPython(): void {
    const ID: string = "C001";
    const url = `http://boanweb.azurewebsites.net/Item`;

    this.httpClient.post(url, {
      "ID": ID + "C03",
      "Name": "Python",
      "Unit": "",
      "Category": "",
      "Price": 100,
      "Description": "Python是經常被廣泛應用的High-level language用於GUI介面、Web程式、網路爬蟲...",
      "Barcode": "",
      "SafetyStock": 10,
      "Str1": "190121-190220",
      "Str2": "",
      "Str3": "",
      "Str4": "",
      "Int1": 0,
      "Int2": 0,
      "Mon1": 0,
      "Mon2": 0,
      "date": "20180121",
    }).subscribe((url) => {
      console.log('OK', this.selectCourde);
    })
  }

  addLinux(): void {
    const ID: string = "C001";
    const url = `http://boanweb.azurewebsites.net/Item`;

    this.httpClient.post(url, {
      "ID": ID + "C04",
      "Name": "Linux",
      "Unit": "",
      "Category": "",
      "Price": 100,
      "Description": "Linux是一種FLOSS，任何個人都可以自由地使用Linux的所有底層原始碼也可以自由地修改和再發布",
      "Barcode": "",
      "SafetyStock": 10,
      "Str1": "190121-190220",
      "Str2": "",
      "Str3": "",
      "Str4": "",
      "Int1": 0,
      "Int2": 0,
      "Mon1": 0,
      "Mon2": 0,
      "date": "20180121",
    }).subscribe((url) => {
      console.log('OK', this.selectCourde);
    })
  }
  addAlgorithm(): void {
    const ID: string = "C001";
    const url = `http://boanweb.azurewebsites.net/Item`;

    this.httpClient.post(url, {
      "ID": ID + "C05",
      "Name": "Algorithm",
      "Unit": "",
      "Category": "",
      "Price": 100,
      "Description": "計算、資料處理和自動推理演算法是一個表示爲有限長列表的有效方法演算法應包含清晰定義的指令用於計算函式",
      "Barcode": "",
      "SafetyStock": 10,
      "Str1": "190121-190320",
      "Str2": "",
      "Str3": "",
      "Str4": "",
      "Int1": 0,
      "Int2": 0,
      "Mon1": 0,
      "Mon2": 0,
      "date": "20180121",
    }).subscribe((url) => {
      console.log('OK', this.selectCourde);
    })
  }
  addAngular(): void {
    const ID: string = "C001";
    const url = `http://boanweb.azurewebsites.net/Item`;

    this.httpClient.post(url, {
      "ID": ID + "C06",
      "Name": "Angular",
      "Unit": "",
      "Category": "",
      "Price": 100,
      "Description": "AngularJS是一款由Google維護的開源JavaScript函式庫用來協助單一頁面應用程式運行",
      "Barcode": "",
      "SafetyStock": 10,
      "Str1": "190321-190420",
      "Str2": "",
      "Str3": "",
      "Str4": "",
      "Int1": 0,
      "Int2": 0,
      "Mon1": 0,
      "Mon2": 0,
      "date": "20180121",
    }).subscribe((url) => {
      console.log('OK', this.selectCourde);
    })
  }

}
