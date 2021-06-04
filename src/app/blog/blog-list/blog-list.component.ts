import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/services/blog/blog.interface';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.blogService.getList().subscribe(posts => this.posts = posts);
  }

}
