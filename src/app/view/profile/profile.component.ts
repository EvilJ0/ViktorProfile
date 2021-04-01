import {Component, OnInit} from '@angular/core';
import {infoViktor}        from '../../data/infoViktor/info';

@Component({
             selector   : 'app-profile',
             templateUrl: './profile.component.html',
             styleUrls  : ['./profile.component.css']
           })
export class ProfileComponent implements OnInit {
  viewModeInfo = `visible`;
  viewModeExperience = `hidden`;
  viewModeEducation = `hidden`;
  viewModeSkill = `hidden`;
  viewModeTraits = `hidden`;
  info = infoViktor;
  iconBack = '../../../../assets/svg/4_Icon.svg';
  iconInfo = '../../../../assets/svg/5_info.svg';
  iconEducation = '../../../../assets/svg/6_education.svg';
  iconExperience = '../../../../assets/svg/7_experience.svg';
  iconSkill = '../../../../assets/svg/8_skills.svg';
  iconTraits='../../../../assets/svg/9_traits.svg';

  constructor() {

  }

  ngOnInit(): void {
  }

  viewInfo() {
    this.viewModeInfo = `visible`;
    this.viewModeExperience = `hidden`;
    this.viewModeEducation = `hidden`;
    this.viewModeSkill = `hidden`;
    this.viewModeTraits = `hidden`;
  }

  viewExperience() {
    this.viewModeInfo = `hidden`;
    this.viewModeExperience = `visible`;
    this.viewModeEducation = `hidden`;
    this.viewModeSkill = `hidden`;
    this.viewModeTraits = `hidden`;
  }

  viewEducation() {
    this.viewModeInfo = `hidden`;
    this.viewModeExperience = `hidden`;
    this.viewModeEducation = `visible`;
    this.viewModeSkill = `hidden`;
    this.viewModeTraits = `hidden`;
  }

  viewSkill() {
    this.viewModeInfo = `hidden`;
    this.viewModeExperience = `hidden`;
    this.viewModeEducation = `hidden`;
    this.viewModeSkill = `visible`;
    this.viewModeTraits = `hidden`;
  }

  viewTraits() {
    this.viewModeInfo = `hidden`;
    this.viewModeExperience = `hidden`;
    this.viewModeEducation = `hidden`;
    this.viewModeSkill = `hidden`;
    this.viewModeTraits = `visible`;
  }
}
