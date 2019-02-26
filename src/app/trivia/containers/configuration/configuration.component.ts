import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { Configuration, ConfigurationUser } from 'src/app/shared/models/Options';
import { MatStepper } from '@angular/material/stepper';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent implements OnInit {
  private configuration: Configuration;
  private confUser = {} as ConfigurationUser;
  private listElements = [] as string [];
  @ViewChild('stepper') stepper: MatStepper;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getOptionsGame().subscribe((data) => {
      this.configuration = data;
      this.configuration.numberQuestions = 10;
    });
  }

  nextStep($event: MatSelectChange): void {
    this.stepper.next();
    this.listElements = Object.keys(this.confUser);
  }

}
