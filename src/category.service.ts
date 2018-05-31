import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Category } from './category';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CategoryService {

  private getCategoriesUrl = "http://localhost:8000/category/api/get";
  private categoriesUrl = "http://localhost:8000/category/api";

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // POST : add a category
  addCategory(category: Category): Observable<Category>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    };
    const categoryUrlPost = `${this.categoriesUrl}/post`;
    return this.http.post<Category>(categoryUrlPost, category, httpOptions);
  }
  // GET : get all categories
  getCategories(): Observable<Category[]> {
    this.messageService.add('CategoryService: fetched catgories');
    return this.http.get<Category[]>(this.getCategoriesUrl);
    // .pipe
    // (
    //   catchError(this.handleError('getcategories', []))
    // );
  }
  // GET : get one category
  getCategory(id: number): Observable<Category> {
    const getOneCategoryUrl = `${this.getCategoriesUrl}/${id}`;
    // this.messageService.add(`categorieservice: fetched category id=${id}`);
    return this.http.get<Category>(getOneCategoryUrl);
    // .pipe
    // (
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Category>(`getCategory id=${id}`))
    // );
  }
}
