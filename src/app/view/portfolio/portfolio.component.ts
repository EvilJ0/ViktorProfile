import {Component, OnInit} from '@angular/core';
import {Images}            from '../../data/urlImages/urlImages';

@Component({
             selector   : 'app-portfolio',
             templateUrl: './portfolio.component.html',
             styleUrls  : ['./portfolio.component.css']
           })
export class PortfolioComponent implements OnInit {
  iconBack = '../../../../assets/svg/4_Icon.svg';
  URLImages = Images;

  constructor() {
  }

  ngOnInit(): void {
  }

}
