import { Post } from './blog.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { repeat, shareReplay } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private static blogUrl = (apiUrl: string) => `${apiUrl}/posts`;

  constructor(private http: HttpClient) { }

  getListTest(): Observable<Post[]> {
    const url = BlogService.blogUrl(environment.apiUrl);
    return this.http.get<Post[]>(url);
  }

  getList(): Observable<Post[]> {
    const url = BlogService.blogUrl(environment.apiUrl);
    return this.http.get<Post[]>(url).pipe(
      shareReplay(3)
    )
  }

  getSingle(id: string): Observable<Post> {
    const url = BlogService.blogUrl(environment.apiUrl) + `/${id}`;
    return this.http.get<Post>(url);
  }

  createPost(newPost: Post): Observable<Post> {
    const url = BlogService.blogUrl(environment.apiUrl);
    return this.http.post<Post>(url, newPost);
  }
}
