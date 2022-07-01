import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simplecrm';
  sucess_msg = true;
  sucess_msg1 = true;
  update_msg = true;

  //using for ngfor
  //creating array inside object
  contacts = [
    {
      firstName: 'Tanveer',
      lastName: 'Patel',
      contact: 7996044234,
    },
    {
      firstName: 'Uttam',
      lastName: 'Singh',
      contact: 8765897609,
    },
    {
      firstName: 'Sameer',
      lastName: 'Shaikh',
      contact: 1234567890,
    },
    {
      firstName: 'Arbaz',
      lastName: 'Patel',
      contact: 7996044234,
    },
    {
      firstName: 'Balram',
      lastName: 'kau',
      contact: 8765897609,
    },
    {
      firstName: 'Aryan',
      lastName: 'Shaikh',
      contact: 1234567890,
    },
  ];
  //used for ngSwitch
  tax = 10;

  //ngStyle
  rcolor = 'red';

  //ngStyle with conditional operator
  txtColor = 'purple';

  //ngClass example
  styleClsProp = 'c2';

  conditionClsProp = 'c3';

  rida = 'c4';

  tanveer = 'c5';

  //creating method and return the variable assign the color
  myClassName() {
    return 'c2';
  }

  //data binding

  //interpolation
  page_heading = 'welcomw to Tanveer SimpleCRM';

  //attribute binding for colspan
  colvalue = 2;

  //Event binding
  sayHello() {
    alert('hello from Tanveer SimpleCRM ');
  }
  heighlight() {
    alert('i am heighlight');
  }

  //two-way binding
  username = '';

  data: string = 'patel';

  //not using ngmodel
  data1: string = 'faiz';
  
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  //built-in pipes
  lowerCaseExample = 'TANVEER';

  upperCaseExample = 'karoshi';

  dateExample = Date.now();

  currencyExample = 30;

  percentExample = 0.78;

  //json pipes 
  //create a expression
  jsonExample = [
    {
      id:1,
      firstName: 'Tanveer',
      lastName: 'Patel',
    },
    {
      id:2,
      firstName: 'Uttam',
      lastName: 'Singh',
    },
    {
      id:3,
      firstName: 'Sameer',
      lastName: 'Shaikh',
    },
    {
      id:4,
      firstName: 'Saurabh',
      lastName: 'Kandekar',
    },
  ];
  //custom pipes
  employees:any=[
    {
      code:'01',firstName:'Tanveer',gender:'M',salary:600000,exp:2
    },
    {
      code:'02',firstName:'Rida',gender:'F',salary:500000,exp:5
    },
    {
      code:'03',firstName:'Anik',gender:'M',salary:800000,exp:10
    },
    {
      code:'04',firstName:'Asiya',gender:'F',salary:200000,exp:8
    },
    {
      code:'05',firstName:'Asif',gender:'M',salary:100000,exp:1
    },
  ];
  
}
