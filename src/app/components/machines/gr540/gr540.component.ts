import { Component, OnInit } from '@angular/core';
import {infoViktor}          from '../../../data/infoViktor/info';

@Component({
  selector: 'app-gr540',
  templateUrl: './gr540.component.html',
  styleUrls: ['./gr540.component.css']
})
export class Gr540Component implements OnInit {
  gr540=infoViktor.machines[1].photo
  constructor() { }

  ngOnInit(): void {
  }

}
