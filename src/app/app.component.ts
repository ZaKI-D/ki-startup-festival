import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {first, timer} from "rxjs";
import {CommonModule, ViewportScroller} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {IContent, ISpeaker} from "./interfaces";
import {NgVarDirective} from "./ng-var.directive";
import {CopywriteComponent} from "./components/copywrite/copywrite.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ContactComponent} from "./components/contact/contact.component";
import {CompaniesComponent} from "./components/companies/companies.component";
import {BlogComponent} from "./components/blog/blog.component";
import {TicketsComponent} from "./components/tickets/tickets.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {SpeakersComponent} from "./components/speakers/speakers.component";
import {CountdownComponent} from "./components/countdown/countdown.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {HeaderMenuComponent} from "./components/header-menu/header-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgVarDirective, CopywriteComponent, FooterComponent, ContactComponent, CompaniesComponent, BlogComponent, TicketsComponent, ScheduleComponent, SpeakersComponent, CountdownComponent, WelcomeComponent, HeaderMenuComponent],
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
    private viewportScroller: ViewportScroller
  ) {
  }


  scrollTo(anchor: string){
    // this.viewportScroller.scrollToAnchor(anchor);

    // @ts-ignore
    document.querySelector('#' + anchor).scrollIntoView({
      behavior: 'smooth',
    });
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


}
