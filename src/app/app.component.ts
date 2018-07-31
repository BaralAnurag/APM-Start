import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <div><h1>{{pageTitle}}</h1>
    <div> My first Component </div>
    <div *ngFor="let item of myArray"> {{ item }} </div>
    </div>`
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
  public type1 =["1001","2002","3003","4004","5005"];
  public types = ["1001","2002","3003"];
  public myArray: string[] = [];
  
  public getMatch(){
    let index = 0;
    for(var i = 0; i < this.type1.length; i++){
      var isMatch = false;
      for(var j = 0; j < this.types.length; j++){
        if(this.type1[i]){
        isMatch = true;
        this.myArray.push("1001");
        break;
      }
    }
    if(!isMatch){
      this.myArray.push("2000");
    }
  }
  console.log(this.myArray);
  }
}
