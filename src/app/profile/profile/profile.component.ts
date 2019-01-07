import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class profileComponent implements OnInit {

  constructor(
    public httpClient: HttpClient,
  ) { }

  itemList: any = {
    "ID": "C01",
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
    "date": "20180121"
  }
  getSelectID = [];

  check = 0;
  checkJava = 0;
  checkPython = 0;
  checkLinux = 0;
  checkAlgorithm = 0;
  checkAngular = 0;

  Ajax = "空閒";
  Java = "空閒";
  Python = "空閒";
  Linux = "空閒";
  Algorithm = "空閒";
  Angular = "空閒";

  ngOnInit() {
    this.getAllCourse();
  }

  getAllCourse() {
    interface Provider {
      ID: "C01",
      Name: "Ajax",
      Unit: "",
      Category: "",
      Price: 100,
      Description: "Ajax又稱非同步JavaScript和XML是一種創建互動式網頁(RWD)的網頁開發技術",
      Barcode: "",
      SafetyStock: 10,
      Str1: "190111-190220",
      Str2: "",
      Str3: "",
      Str4: "",
      Int1: 0,
      Int2: 0,
      Mon1: 0,
      Mon2: 0,
      date: "20180121"
    }

    let save: Array<Provider>;

    const url = `http://boanweb.azurewebsites.net/Item`;
    this.httpClient.get(url).subscribe((res) => {
      this.itemList = res;
      console.log('接到資料了', this.itemList);
      //console.log(res.some(item => item.ID === 'Blofeld'));

      for (var x in this.itemList) {
        // this.itemList.hasOwnProperty(x) && this.itemList.push(this.test[x])
        console.log(this.itemList[x].ID);
        this.getSelectID[x] = this.itemList[x].ID


        if (this.itemList[x].ID.substr(this.itemList[x].ID.indexOf('1') + 1, 3) == "C01") {

        }

        //.substr(str.indexOf('-') + 1);


        switch (this.itemList[x].ID.substr(this.itemList[x].ID.indexOf('1') + 1, 3)) {
          case "C01":
            //alert("Selected Case Number is 1");
            this.check += 1;
            break;
          case "C02":
            this.checkJava += 1;
            break;
          case "C03":
            this.checkPython += 1;
            break;
          case "C04":
            this.checkLinux += 1;
            break;
          case "C05":
            this.checkAlgorithm += 1;
            break;
          case "C06":
            this.checkAngular += 1;
            break;
          default:

        }

        if (this.check == 1) {
          this.Ajax = "Ajax"
        }
        if (this.checkJava == 1) {
          this.Java = "Java"
        }
        if (this.checkPython == 1) {
          this.Python = "Python"
        }
        if (this.checkLinux == 1) {
          this.Linux = "Linux"
        }
        if (this.checkAlgorithm == 1) {
          this.Algorithm = "Algorithm"
        }
        if (this.checkAngular == 1) {
          this.Angular = "Angular"
        }
      }

      console.log(this.itemList[x].ID.substr(this.itemList[x].ID.indexOf('1') + 1, 3));

      // save.push(res);
      // this.save = res.toString();
      // var secondInput = this.save.element(document.querySelector("#divWrapper #insideDiv #secondInput"));
      // console.log('接到資料了', secondInput);
    });
  }

}
