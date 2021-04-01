import { Component, OnInit } from '@angular/core';
import {infoViktor}          from '../../../data/infoViktor/info';

@Component({
  selector: 'app-jw',
  templateUrl: './jw.component.html',
  styleUrls: ['./jw.component.css']
})
export class JwComponent implements OnInit {
  jw=infoViktor.machines[3].photo
  constructor() { }

  ngOnInit(): void {
  }

}
