import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/services/blog/blog.interface';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {
  
  private id: string | undefined;

  post$: Observable<Post> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private blogService: BlogService
  ) {
    this.activatedRoute.params.subscribe(urlParams => {
      this.id = urlParams.id;
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.loadPost(this.id);
    }
  }

  loadPost(id: string) {
    this.post$ = this.blogService.getSingle(id);
  }

}
