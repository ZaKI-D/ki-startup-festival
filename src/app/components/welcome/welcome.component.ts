import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit} from '@angular/core';
import {IContent} from "../../interfaces";
import {CountdownComponent} from "../countdown/countdown.component";
import 'add-to-calendar-button';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CountdownComponent,
    NgIf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  @Input()
  content!: IContent;


  startDate!: string;
  startTime!: string;
  endTime!: string;

  fullAddress!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.startDate = this.content.eventDate.split('T')[0];
    this.startTime = this.content.startTime;
    this.endTime = this.content.endTime;
    this.fullAddress = [this.content.address.name, this.content.address.street + ' ' + this.content.address.number, this.content.address.zip + ' ' +
    this.content.address.city].join(', ');
  }
}
