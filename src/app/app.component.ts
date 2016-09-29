import { Component } from '@angular/core';
import { Hero } from './models/hero.model';
import { HeroService } from './services/hero.service';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  
  constructor(private heroService: HeroService) {};

  ngOnInit() {
  }
}
