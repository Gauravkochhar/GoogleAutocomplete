import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'google-address-autocomplete';
  autocompleteInput: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAddressOnChange(place: Object) {
    console.log('selected address:', place);
  }

  ngOnDestroy() {
  }
}
