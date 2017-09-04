import {Component, Input, OnInit} from '@angular/core';
import {Vokabel} from "../vokabel.model";

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {

  @Input() vokabel: Vokabel;
  @Input() toggle: boolean;

  constructor() { }

  ngOnInit() {
    this.toggle = true;
  }

}
