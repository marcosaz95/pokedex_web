import { Component, OnInit, Input } from '@angular/core';

import { IPokemon } from '@interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: IPokemon;

  constructor() {}

  ngOnInit() {}
}
