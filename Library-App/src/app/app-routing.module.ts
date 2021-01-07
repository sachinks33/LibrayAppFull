import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [{path:'' , component:BooksComponent },
{path:'books' , component:BooksComponent },
{path:'authors' , component:AuthorsComponent },
{path:'books/:bookIndex' , component: BookComponent },
{path:'authors/:authorIndex' , component:AuthorComponent },
{path:'addbook' , component:AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
