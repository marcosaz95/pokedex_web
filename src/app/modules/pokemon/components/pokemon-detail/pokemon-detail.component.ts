import { IPokemon } from './../../../../models/interfaces/pokemon.interface';
import { Pokemon } from './../../../../models/classes/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: IPokemon;
  displayedMoves: string[];
  isSeeingMore = false;

  constructor(private _pokemon: Pokemon, private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._pokemon.setIsLoading(true);
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.pokemon = this._pokemon.getPokemonFromCurrentData(Number(params.get('id')));
        if (!this.pokemon) {
          this._router.navigate(['pokemon']);
        } else {
          this.buildInformation(false);
        }
      }
    });
  }

  buildInformation(all: boolean) {
    this.isSeeingMore = all;
    this.displayedMoves = all ? this.pokemon.moves : this.pokemon.moves.filter((move: string, index: number) => index < 10);
  }

  seeMoreMovements() {
    this.displayMoreMovements();
  }

  async displayMoreMovements() {
    // const modal = await this._modalController.create({
    //   component: MovementsListComponent,
    //   cssClass: 'my-custom-class',
    //   componentProps: {
    //     moves: this.pokemon.moves,
    //   },
    // });
    // return await modal.present();
  }
}
