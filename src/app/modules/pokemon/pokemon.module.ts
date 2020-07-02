import { SharedModule } from './../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonMainComponent } from './components/pokemon-main/pokemon-main.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-list/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SignOutMessageComponent } from './components/pokemon-main/sign-out-message/sign-out-message.component';
import { EvolutionChainComponent } from './components/pokemon-detail/evolution-chain/evolution-chain.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserUpdatedComponent } from './components/profile/user-updated/user-updated.component';
import { PasswordFormComponent } from './components/profile/password-form/password-form.component';

@NgModule({
  imports: [SharedModule, PokemonRoutingModule],
  declarations: [
    PokemonMainComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    SignOutMessageComponent,
    EvolutionChainComponent,
    ProfileComponent,
    UserUpdatedComponent,
    PasswordFormComponent,
  ],
  entryComponents: [SignOutMessageComponent, UserUpdatedComponent, PasswordFormComponent],
})
export class PokemonModule {}
