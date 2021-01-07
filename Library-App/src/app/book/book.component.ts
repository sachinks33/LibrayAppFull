import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from '../book.service';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  
  title:string = 'Book Details';
  book: BookModel[]=[];

  constructor(private bookService:BookService, private activatedRoute: ActivatedRoute) {  
    
  }
  
  ngOnInit(): void {
    
    let bookIndex = this.activatedRoute.snapshot.params.bookIndex;

    this.bookService.getBook(bookIndex).subscribe((data)=>{ 
      this.book=JSON.parse( JSON.stringify(data));
    })
  }

}
