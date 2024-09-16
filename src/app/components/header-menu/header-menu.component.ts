import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IContent} from "../../interfaces";

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {

  @Input()
  content!: IContent;
  @Output()
  scrollTo = new EventEmitter<string>();


  scroll (anchor: string){
    this.scrollTo.emit(anchor);
  }

}
