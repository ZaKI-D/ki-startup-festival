import {Component, Input} from '@angular/core';
import {IContent} from "../../interfaces";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Input()
  content!: IContent;
}
