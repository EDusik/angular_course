import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { PostDetailsComponent } from '../posts/post-details/post-details.component';

const routes: Routes = [
  { path: 'post/:id', component: PostDetailsComponent },
  { path: '', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
