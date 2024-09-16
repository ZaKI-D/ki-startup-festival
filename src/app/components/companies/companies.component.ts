import {Component, Input} from '@angular/core';
import {IContent} from "../../interfaces";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {

  @Input()
  content!: IContent;
}
