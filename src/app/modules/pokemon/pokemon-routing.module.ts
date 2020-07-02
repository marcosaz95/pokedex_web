import { ProfileComponent } from './components/profile/profile.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonMainComponent } from './components/pokemon-main/pokemon-main.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PokemonMainComponent,
    children: [
      { path: '', component: PokemonListComponent },
      { path: 'detail/:id', component: PokemonDetailComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
