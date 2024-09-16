import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IContent} from "../../interfaces";
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input()
  content!: IContent;

  months: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  windowWidth: number = 0;

  sub!: Subscription;


  ngOnInit(): void {
    this.sub = timer(0, 1000).subscribe(() => {
      this.calculateTime();
    });
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    }
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  private calculateTime() {
    const now = new Date();
    const target = new Date(Date.parse(this.content.eventDate));
    let diff = new Date(target.getTime() - now.getTime());
    if (diff.getTime() > 0) {
      this.months = diff.getMonth();
      this.days = diff.getDate();
      this.hours = diff.getHours();
      this.minutes = diff.getMinutes();
      this.seconds = diff.getSeconds();
    } else {
      this.months = 0;
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
}
