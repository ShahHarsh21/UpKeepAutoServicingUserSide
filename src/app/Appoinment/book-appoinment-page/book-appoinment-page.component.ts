import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-appoinment-page',
  templateUrl: './book-appoinment-page.component.html',
  styleUrls: ['./book-appoinment-page.component.css']
})
export class BookAppoinmentPageComponent implements OnInit {
  bookAppoinmentForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.bookAppoinmentForm = new FormGroup(
      {

      }
    );
  }

}
