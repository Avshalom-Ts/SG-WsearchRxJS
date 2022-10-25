// The Api request
//https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space -->

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    // return 'I am wikipedia search results';
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      //Equevilant to the address Above
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }
}
