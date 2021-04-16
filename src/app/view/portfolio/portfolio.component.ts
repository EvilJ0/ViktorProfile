import {Component, OnInit}           from '@angular/core';
import {Images, PortfolioIconImages} from '../../data/urlImages/urlImages';

@Component({
             selector   : 'app-portfolio',
             templateUrl: './portfolio.component.html',
             styleUrls  : ['./portfolio.component.css']
           })
export class PortfolioComponent implements OnInit {
  iconBack = '../../../../assets/svg/4_Icon.svg';
  test = '../../../../assets/img/banners/banners_1.jpg';
  URLImages = Images;
  urlIconsProfile= PortfolioIconImages
  categories = Object.keys(this.URLImages);
  category;
  viewBigWindow = `hidden`;
  bigContent;

  constructor() {
  }

  ngOnInit(): void {
    console.log(Object.keys(this.URLImages).length);
  }


  selectCategory(categorySelected): void {
    this.category = this.URLImages[categorySelected];
    console.log(this.category);

  }

  contentClicked(content) {
    this.viewBigWindow = 'visible';
    this.bigContent=content;
    console.log(this.bigContent)
  }

  closeBigWindow(){
    this.viewBigWindow='hidden';
  }
}
