import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-got-quotes',
  templateUrl: './got-quotes.component.html',
  styleUrls: ['./got-quotes.component.scss']
})
export class GotQuotesComponent implements OnInit {
  gotQuotes: any  = '';
  constructor(
    private _gotQuotes: MyServiceService
  ) { }

  ngOnInit(): void {
    this._gotQuotes.getGotQuotes().subscribe((response: any)=> {
      console.log(response);
      this.gotQuotes = response;
    })
  }

}
