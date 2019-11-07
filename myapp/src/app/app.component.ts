import { Component } from '@angular/core';

export class PlayingCard {
    cardVal: string;
    suit: string;
}

@Component({
    selector: 'app-root',
    // Multi-line content allowed with back ticks.
    template: `<h1>Hello world!  {{title}} <br/>
              <!-- Show cards in unordered list. -->
              <ul><li *ngFor="let card of cards" (click)="onSelect(card)">
                  {{card.cardVal}}</li>
             </ul>
             <div *ngIf="selectedCard">
                 <h2>{{selectedCard.cardVal}} **</h2>
                 <input [(ngModel)]="selectedCard.cardVal" placeholder="name"/>
              </div>
			  `
})

export class AppComponent { 
    public title = 'This is Angular!';
    // Include card data in class as public property.
    public cards = CARDS; 
    selectedCard: PlayingCard;
	
    onSelect(card: PlayingCard) { 
      alert(card.suit);
      this.selectedCard = card; 
    }
}

// Define card data.
var CARDS: PlayingCard[] = [
    { cardVal:"Ace", suit:"Spades"},
    { cardVal:"Two", suit:"Clubs" },
    { cardVal:"Six", suit:"Hearts"},
];





















