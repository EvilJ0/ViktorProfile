import { Component, OnInit } from '@angular/core';
import {infoViktor}          from '../../../data/infoViktor/info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  info = infoViktor;
  i640= `hidden`;
  g540= `hidden`;
  x2000= `hidden`;
  jw= `hidden`;
  constructor() { }

  ngOnInit(): void {
  }

  viewI640() {
    this.i640=`visible`;
    this.g540=`hidden`;
    this.x2000=`hidden`;
    this.jw =`hidden`;
    console.log(`viewI640 work`)
  }
  viewG540() {
    this.i640=`hidden`;
    this.g540=`visible`;
    this.x2000=`hidden`;
    this.jw =`hidden`;
    console.log(`viewG540 work`)

  }
  viewX2000() {
    this.i640=`hidden`;
    this.g540=`hidden`;
    this.x2000=`visible`;
    this.jw =`hidden`;
    console.log(`viewX2000 work`)

  }
  viewJw() {
    this.i640=`hidden`;
    this.g540=`hidden`;
    this.x2000=`hidden`;
    this.jw =`visible`;
    console.log(`viewJw work`)

  }

  invisible(){
    this.i640=`hidden`;
    this.g540=`hidden`;
    this.x2000=`hidden`;
    this.jw =`hidden`;
  }

  viewInfo(machinesId:string){

    if (machinesId=='1'){return this.viewI640()}
    if (machinesId=='2'){return this.viewG540()}
    if (machinesId=='3'){return this.viewX2000()}
    if (machinesId=='4'){return this.viewJw()}
  }
}
