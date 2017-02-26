import { Routes, RouterModule }  from '@angular/router';
import { DashboardComponent, CategoriesComponent, TagsComponent, 
         QuestionsComponent, QuestionAddUpdateComponent, MyQuestionsComponent, 
         AdminQuestionsComponent, AdminComponent } 
  from './components/index';
import { AuthGuard } from './services';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'questions',
    component: MyQuestionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'question/add',
    component: QuestionAddUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    data: { roles: ["admin"] },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'tags',
        component: TagsComponent
      },
      {
        path: 'questions',
        component: AdminQuestionsComponent
      }

    ]
  }
];
