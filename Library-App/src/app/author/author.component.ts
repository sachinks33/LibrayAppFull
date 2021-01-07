import { Component, OnInit } from '@angular/core';
import { AuthorsModel } from '../authors/authors.model';
import { BookService } from '../book.service';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:string = 'Author Details';
  author: AuthorsModel[]=[];

  constructor(private bookService:BookService, private activatedRoute: ActivatedRoute) {  
    
  }
  
  ngOnInit(): void {
    
    let authorIndex = this.activatedRoute.snapshot.params.authorIndex;

    this.bookService.getAuthor(authorIndex).subscribe((data)=>{ 
      this.author=JSON.parse( JSON.stringify(data));
      console.log(this.author);
    })
  }

}
