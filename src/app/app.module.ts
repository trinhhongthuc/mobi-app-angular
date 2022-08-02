import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/Home/Home.component";
import { LoginComponent } from "./pages/Login/Login.component";
import { PageModule } from "./pages/page.module";
import { AuthGuardService } from "./utils/guard/AuthGuard";
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PageModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
