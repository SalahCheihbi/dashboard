import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [{

  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path:'posts',
      component: PostsComponent
    }
  ]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
