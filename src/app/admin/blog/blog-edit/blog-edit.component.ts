import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Post } from '../../../services/blog/blog.interface';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private blogService: BlogService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['Test', [Validators.required]],
      title: ['Test Title', [Validators.required]],
      description: ['Test Description', [Validators.required]]
    });
  }

  savePost(newPost: Post): void {
    if (newPost) {
      this.blogService.createPost(newPost).subscribe(response => {
        console.log(response);
      });
    }

  }

}
