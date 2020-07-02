import { NgModule } from '@angular/core';

import { AuthGuard } from './../auth.guard';
import { PokedexValidators } from './../validators';
import { Pokemon } from './../../models/classes/pokemon';
import { PokemonService } from './../../models/services/pokemon.service';
import { User } from './../../models/classes/user';

@NgModule({
  providers: [User, Pokemon, PokemonService, PokedexValidators, AuthGuard],
})
export class CoreModule {}
