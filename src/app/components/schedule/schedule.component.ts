import {Component, Input, OnInit} from '@angular/core';
import {IAppointment, IContent} from "../../interfaces";
import {NgForOf, NgIf} from "@angular/common";
import {NgVarDirective} from "../../ng-var.directive";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgVarDirective
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {

  @Input()
  content!: IContent;

  schedule: IAppointment[] = [];


  ngOnInit(): void {
    this.schedule = this.content.schedule.filter(a => a.enabled !== false);
    this.schedule.sort((a, b) => {
      return parseInt(a.time) - parseInt(b.time);
    })
  }

  getSpeaker(speakerId: string) {
    return this.content?.speakers?.find(sp => sp.id == speakerId);
  }

  toggle(i: number) {
    // @ts-ignore
    document.getElementById('info_'+i).classList.toggle('hidden');
  }
}
