import {Component, OnInit} from '@angular/core';
import {infoViktor}        from '../../../data/infoViktor/info';

@Component({
             selector   : 'app-info',
             templateUrl: './info.component.html',
             styleUrls  : ['./info.component.css']
           })
export class InfoComponent implements OnInit {
  info = infoViktor;

  constructor() {
  }

  ngOnInit(): void {
  }

}
