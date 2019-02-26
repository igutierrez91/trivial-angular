import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {

  public countdownNumber: number = 10;
  public countdown$: Observable <number>;
  private subscription: Subscription = null;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.countdown$ = this.commonService.countdown(10);
  }

  restartCountdown() {
    this.subscription.unsubscribe();
    this.countdownNumber = 10;
    this.doCountdown();
  }

  doCountdown() {
    this.subscription = this.countdown$.subscribe(() => {
      this.countdownNumber = this.countdownNumber - 1;
    });
  }

}
