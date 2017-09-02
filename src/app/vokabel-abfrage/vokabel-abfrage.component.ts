import { Component, OnInit } from '@angular/core';
import {Vokabel} from "./vokabel.model";

@Component({
  selector: 'app-vokabel-abfrage',
  templateUrl: './vokabel-abfrage.component.html',
  styleUrls: ['./vokabel-abfrage.component.css']
})
export class VokabelAbfrageComponent implements OnInit {

  vokabeln : Vokabel[] = [
    new Vokabel('Good morning!', 'Guten Morgen!'),
    new Vokabel('I know.', 'Ich weiß'),
    new Vokabel('I don\'t know', 'Ich weiß nicht')
  ];

  constructor() { }

  ngOnInit() {
  }

}
