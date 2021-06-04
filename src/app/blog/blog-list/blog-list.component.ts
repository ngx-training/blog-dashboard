import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/services/blog/blog.interface';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  posts: Post[] = [];
  posts$: Observable<Post[]> | undefined;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    //this.loadPosts();
    this.posts$ = this.blogService.getList();
  }

  loadPosts() {
    this.blogService.getList().subscribe(posts => this.posts = posts);
  }

}
