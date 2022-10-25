// The Api request
//https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space -->

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

export interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}
@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    // return 'I am wikipedia search results';
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        //Equevilant to the address Above
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
