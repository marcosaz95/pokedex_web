import { AuthGuard } from './../auth.guard';
import { PokedexValidators } from './../validators';
import { PokemonService } from './../../models/services/pokemon.service';
import { Pokemon } from './../../models/classes/pokemon';
import { User } from './../../models/classes/user';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [User, Pokemon, PokemonService, PokedexValidators, AuthGuard],
})
export class CoreModule {}
