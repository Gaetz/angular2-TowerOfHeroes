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
  firstHero: Hero = { id:1, name:'Windstorm'};
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {};

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  // Handling hero selection
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
