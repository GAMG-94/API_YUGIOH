import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketName'
})
export class MarketNamePipe implements PipeTransform {

  markets = [
    { id: 'amazon_price', name: 'Amazon'},
    { id: 'cardmarket_price', name: 'Card Market'},
    { id: 'coolstuffinc_price', name: 'Cool Stuffinc'},
    { id: 'ebay_price', name: 'Ebay'},
    { id: 'tcgplayer_price', name: 'TCG Player'},
  ]

  transform(value: string): string {
    const market = this.markets.find( m => m.id === value)
    return market?.name || '';
  }
}
