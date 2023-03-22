
import { Component } from '@angular/core';

export class AppComponent {
  MyHeader = 'Flowers';
  flowers: Flowers = {
    Flower_Id: 1,
    Flower_Name: 'Jasmine'
  };
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{MyHeader}}</h1>
    <h2>{{flowers.Flower_Name}} details!</h2>
    <div><label>id: </label>{{flowers.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="flowers.Flower_Name" placeholder="Flower_Name">
    </div>
    `
})
export class Flowers {
  Flower_Id : number;
  Flower_Name : string;
}

