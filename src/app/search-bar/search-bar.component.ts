import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term: any;

  constructor() {}

  ngOnInit(): void {}

  // onInput(value: any) {
  //   this.term = value.target.value;
  // }

  onFormSubmit(event: any) {
    //To prevent the default behavier of the form
    event.preventDefault();
    // console.log(this.term);
    this.submitted.emit(this.term);
  }
}
