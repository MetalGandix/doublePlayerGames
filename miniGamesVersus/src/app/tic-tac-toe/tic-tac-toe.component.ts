import { Component, OnInit } from '@angular/core';
import { Giocatore } from '../class/giocatore';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {


  matrix: Number[][] | undefined
  i: number | undefined
  j: number = 0

  scelta: boolean = false

  constructor() {
  }

  giocatore1: Giocatore = new Giocatore();
  giocatore2: Giocatore = new Giocatore();



  sceltaUtente(a: any) {
    console.log(a)
    if (a == 1) {
      this.scelta = true
    } else if (a == 2) {
      this.scelta = false
    }
  }

  arrayNumericoColonna = [
    1,
    2,
    3
  ]

  arrayMosse = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]

  ngOnInit() {
    var i = 1;
    for (i; i < 10; i++) {
      this.arrayMosse[i]
      if (this.arrayMosse[1]) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      } else if (this.arrayMosse[2]) {
        this.giocatore2.mossa = true
        this.giocatore1.mossa = false
      } else if (this.arrayMosse[3]) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      } else if (this.arrayMosse[4]) {
        this.giocatore2.mossa = true
        this.giocatore1.mossa = false
      } else if (this.arrayMosse[5]) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      } else if (this.arrayMosse[6]) {
        this.giocatore2.mossa = true
        this.giocatore1.mossa = false
      } else if (this.arrayMosse[7]) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      } else if (this.arrayMosse[8]) {
        this.giocatore2.mossa = true
        this.giocatore1.mossa = false
      } else if (this.arrayMosse[9]) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      }
    }
    
    this.matrix = [];
    for (this.i = 0; this.i < 4; this.i++) {
      this.matrix[this.i] = [];
      for (this.j = 0; this.j < 4; this.j++) {
        this.matrix[this.i][this.j] = new Number();
      }

    }
  }
}
