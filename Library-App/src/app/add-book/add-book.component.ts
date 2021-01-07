import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Routes, RouterModule } from '@angular/router';
import { AddBookModel } from './addBooks.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  title:string="Add Book";
  bookDetails = new AddBookModel("", "", "", "","");
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
  }

  addBook()
  {
    this.bookservice.addBook(this.bookDetails);
    console.log(this.bookDetails);
  }

}
