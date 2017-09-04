import {Component, Input, OnInit} from '@angular/core';
import {Vokabel} from "../vokabel.model";

@Component({
  selector: 'app-deutsch',
  templateUrl: './deutsch.component.html',
  styleUrls: ['./deutsch.component.css']
})
export class DeutschComponent implements OnInit {

  @Input() vokabel: Vokabel;
  @Input() toggle: boolean;

  constructor() { }

  ngOnInit() {
    this.toggle = true;
  }

}
