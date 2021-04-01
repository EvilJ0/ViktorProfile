import { Component, OnInit } from '@angular/core';
import {infoViktor}          from '../../../data/infoViktor/info';

@Component({
  selector: 'app-i640',
  templateUrl: './i640.component.html',
  styleUrls: ['./i640.component.css']
})
export class I640Component implements OnInit {
i640=infoViktor.machines[0].photo
  constructor() { }

  ngOnInit(): void {
  }

}
