import {Component, Input} from '@angular/core';
import {IContent} from "../../interfaces";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  @Input()
  content!: IContent;
}
