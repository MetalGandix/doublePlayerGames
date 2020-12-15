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

  g1Move: boolean = false
  g2Move: boolean = false



  sceltaUtente(a: any) {
    console.log(a)
    var i = 1;
    for (i; i < 10; i++) {
      this.arrayMosse[i]
      console.log(this.arrayMosse[i])
      if(i == 1){
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      }else if (i == 2) {
        this.giocatore1.mossa = false
        this.giocatore2.mossa = true
      } else if (i == 3) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      } else if (i == 4) {
        this.giocatore1.mossa = false
        this.giocatore2.mossa = true
      } else if (i == 5) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      } else if (i == 6) {
        this.giocatore1.mossa = false
        this.giocatore2.mossa = true
      } else if (i == 7) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      } else if (i == 8) {
        this.giocatore1.mossa = false
        this.giocatore2.mossa = true
      } else if (i == 9) {
        this.giocatore1.mossa = true
        this.giocatore2.mossa = false
      }
    }
  }

  arrayGriglia = [
    {id: 0, position: 1},
    {id: 1, position: 2},
    {id: 2, position: 3},
    {id: 3, position: 4},
    {id: 4, position: 5},
    {id: 5, position: 5},
    {id: 6, position: 6},
    {id: 7, position: 7},
    {id: 8, position: 8},
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
    console.log(this.arrayGriglia[0].position)
    var a
    this.sceltaUtente(a)
    this.matrix = [];
    for (this.i = 0; this.i < 4; this.i++) {
      this.matrix[this.i] = [];
      for (this.j = 0; this.j < 4; this.j++) {
        this.matrix[this.i][this.j] = new Number();
      }

    }
  }
}
