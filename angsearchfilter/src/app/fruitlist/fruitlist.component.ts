import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrls: ['./fruitlist.component.css']
})
export class FruitlistComponent {

  fulst= ["Guava","Pear","WaterMelon","Melon","Peach"]
searchtext:any='';

}
