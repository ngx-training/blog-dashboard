import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogComponent } from './blog.component';

const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogListComponent
      },
      {
        path: ':id',
        component: BlogSingleComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
