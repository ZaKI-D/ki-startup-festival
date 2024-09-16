import {Component, Input} from '@angular/core';
import {IContent, ISpeaker} from "../../interfaces";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {

  @Input()
  content!: IContent;
  socialData: { [key: string]: { title: string, icon: string } } = {
    facebook: {title: 'Facebook', icon: 'zmdi-facebook'},
    linkedin: {title: 'LinkedIn', icon: 'zmdi-linkedin'},
    instagram: {title: 'Instagram', icon: 'zmdi-instagram'},
    website: {title: 'Website', icon: 'zmdi-link'},
    github: {title: 'GitHub', icon: 'zmdi-github'},
    x: {title: 'X', icon: 'zmdi-twitter'},
    youtube: {title: 'Youtube', icon: 'zmdi-youtube-play'}
  }

  getSocials(speaker: ISpeaker) {
    const socials: { url: string; title: string; icon: string }[] = []


    for (let key of Object.keys(speaker.social)) {
      // @ts-ignore
      const s = speaker.social[key];
      if (s instanceof Array){
        for(let ss of (s as string[])){
          socials.push({url: ss as string, ...this.socialData[key]})
        }
      }
      else {
        socials.push({url: s as string, ...this.socialData[key]})
      }
    }

    return socials;
  }
}
