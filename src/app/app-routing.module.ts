import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskEditorComponent } from './pages/task-editor/task-editor.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path:'', component:AppComponent},
  { path:'index.html', component:AppComponent},
  { path:'index', component:AppComponent},
  { path:'tasks', component:TaskEditorComponent },
  { path:'login', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
