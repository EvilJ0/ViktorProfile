import { Component, OnInit } from '@angular/core';
import {infoViktor}          from '../../../data/infoViktor/info';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  info = infoViktor;
  constructor() { }

  ngOnInit(): void {
  }

}
