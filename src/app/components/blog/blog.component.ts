import {Component, Input} from '@angular/core';
import {IContent} from "../../interfaces";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  @Input()
  content!: IContent;
}
