import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: 'title', content: 'Aswin Harikumar - Front-End Software Engineer'},
      {name: 'description', content: 'I am a Front-End Software Engineer  based in Bangalore , India.'},
      {name: 'og:type', content: 'website'},
      {name: 'og:url', content: 'http://aswinharikumar.me'},
      {name: 'og:title', content: 'Aswin Harikumar - Front-End Software Engineer'},
      {name: 'og:description', content: 'I am a Front-End Software Engineer  based in Bangalore , India.'},
      {name: 'og:image', content: '../assets/portfolio.png'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:url', content: 'http://aswinharikumar.me'},
      {name: 'twitter:title', content: 'Aswin Harikumar - Front-End Software Engineer'},
      {name: 'twitter:description', content: 'I am a Front-End Software Engineer  based in Bangalore , India.'},
      {name: 'twitter:image', content: '../assets/portfolio.png'}
    ]);
  }
}
