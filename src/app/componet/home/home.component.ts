import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  


  constructor() { }



  ngOnInit(): void {
      this.boton();
  }


  handleHome() {
    console.log('HOME-1');
  }

boton(){
  let  button = document.getElementById('brt');
    button.addEventListener('click', () => console.log('Click me'));
  fromEvent(button, 'click').subscribe(arg => console.log('rxj'));
}




}
