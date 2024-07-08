import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {first, timer} from "rxjs";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {IContent} from "./interfaces";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ki-startup-festival';

  fadeOut = false;
  loading = true;
  content?: IContent;

  constructor(
    private http: HttpClient,
  ) {
  }


  async ngOnInit(): Promise<void> {
    // Correct use of first operator with http.get Observable.
    this.http.get<IContent>('content.json').pipe(first()).subscribe((data: IContent) => {
      this.content = data;

      timer(500).subscribe(() => {
        this.fadeOut = true;
        timer(900).subscribe(() => {
          this.loading = false;
        });
      });

    }, (error: any) => {
      // Display error message in case of any error in http request
      console.error('Error loading content.json', error);
    });
  }


  getSpeaker(speakerId: string) {
    return this.content?.speakers?.find(sp => sp.id == speakerId);
  }
}
