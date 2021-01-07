import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddBookModel } from './add-book/addBooks.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get("http://localhost:2000/books");
  }
  getBook(bookId:string){
    return this.http.get("http://localhost:2000/books/"+bookId);
  }

  getAuthors(){
    return this.http.get("http://localhost:2000/authors");
  }
  getAuthor(authorId:string){
    return this.http.get("http://localhost:2000/authors/"+authorId);
  }

  addBook(bookDetails: AddBookModel) {
    return this.http.post("http://localhost:2000/addBook", {"Details": bookDetails})
    .subscribe(data=>{console.log(data)});
  }
}
