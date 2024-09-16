import {Component, Input} from '@angular/core';
import {IContent} from "../../interfaces";
import {CopywriteComponent} from "../copywrite/copywrite.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CopywriteComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input()
  content!: IContent;
}
