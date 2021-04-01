import { Component, OnInit } from '@angular/core';
import {infoViktor}          from '../../../data/infoViktor/info';

@Component({
  selector: 'app-x2000',
  templateUrl: './x2000.component.html',
  styleUrls: ['./x2000.component.css']
})
export class X2000Component implements OnInit {
  x2000=infoViktor.machines[2].photo
  constructor() { }

  ngOnInit(): void {
  }

}
