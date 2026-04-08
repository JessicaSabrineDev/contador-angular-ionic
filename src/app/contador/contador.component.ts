import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-contador',
  standalone:true,
  templateUrl:'./contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent  implements OnInit {
  contador = 0;
  increment(){
    this.contador++;
  }

  constructor() { }

  ngOnInit() {}

}
