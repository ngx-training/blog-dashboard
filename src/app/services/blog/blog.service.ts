import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private static blogUrl = (apiUrl: string) => `${apiUrl}/posts`;

  constructor(private http: HttpClient) { }

  getList(): Observable<Post[]> {
    const url = BlogService.blogUrl(environment.apiUrl);
    return this.http.get<Post[]>(url);
  }

  getSingle(id: string): Observable<Post> {
    const url = BlogService.blogUrl(environment.apiUrl) + '/' + id;
    return this.http.get<Post>(url);
  }
}
