import { SignOutMessageComponent } from './sign-out-message/sign-out-message.component';
import { Pokemon } from './../../../../models/classes/pokemon';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss'],
})
export class PokemonMainComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;
  isLoadingSubscription: Subscription;
  isHomePage = true;
  isLoading = false;

  constructor(private _router: Router, private _pokemon: Pokemon, private _dialog: MatDialog) {}

  ngOnInit() {
    this.routerSubscription = this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event['url'] === '/pokemon';
      });

    this.isLoadingSubscription = this._pokemon
      .getIsLoading()
      .subscribe((isLoading: boolean) => setTimeout(() => (this.isLoading = isLoading)));
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.isLoadingSubscription) {
      this.isLoadingSubscription.unsubscribe();
    }
  }

  /**
   *
   * Redirects to home page
   * @memberof PokedexMainComponent
   */
  goHome() {
    this._router.navigate(['pokemon']);
  }

  /**
   *
   * Redirects to profile page
   * @memberof PokedexMainComponent
   */
  viewProfile() {
    this._router.navigate(['pokemon/profile']);
  }

  /**
   *
   * Before to sign out, displayes an alert
   * @memberof PokedexMainComponent
   */
  signOut() {
    this.presentSignOutMessage();
  }

  /**
   *
   * sends an event to let the list know that there is a new search
   * @param {string} searchValue
   * @memberof PokedexMainComponent
   */
  search(searchValue: string) {
    this.goHome();
    setTimeout(() => {
      this._pokemon.setSearchValue(searchValue);
    });
  }

  /**
   *
   * displayes the alert
   * @memberof PokedexMainComponent
   */
  presentSignOutMessage() {
    const dialogRef = this._dialog.open(SignOutMessageComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._router.navigate(['']);
      }
    });
  }
}
