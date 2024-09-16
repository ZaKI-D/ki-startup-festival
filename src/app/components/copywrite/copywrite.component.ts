import {Component, Input} from '@angular/core';
import {IContent} from "../../interfaces";

@Component({
  selector: 'app-copywrite',
  standalone: true,
  imports: [],
  templateUrl: './copywrite.component.html',
  styleUrl: './copywrite.component.css'
})
export class CopywriteComponent {

  @Input()
  content!: IContent;

  year = new Date().getFullYear();

}
