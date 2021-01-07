import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { AuthorsModel } from './authors.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:String = 'Books';
  authors: AuthorsModel[]=[];
  authorIndex="";
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse( JSON.stringify(data));
    })
  }

}
