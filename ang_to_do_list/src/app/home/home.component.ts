import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newText: string = '';
  texts: string[] = [];


  addTextToList() {
    if (this.newText) {
      alert(this.newText);
      this.texts.push(this.newText);
      this.newText = ''; 
    }

  }
  removeText(index: number) {
    this.texts.splice(index, 1);
  }
}
