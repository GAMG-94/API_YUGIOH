import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/interfaces/card.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards: Card[] = [];
  offset = 0;

  cardTextFC = new FormControl('');

  constructor(private card: CardService) {}

  ngOnInit():void {
    this.cardTextFC.valueChanges.pipe(debounceTime(1000)).subscribe((res)=>{
      this.cards = [];
      this.searchCard(res);
    });
    this.searchCard();
  }

  onScroll() {
    this.offset += 100;
    this.searchCard();
  }

  searchCard(cardName: string | null = null){
    this.card.getCards(cardName, this.offset).subscribe((res) => {
      this.cards = res;
      this.cards = [...this.cards,...res];
    })
  }

}
