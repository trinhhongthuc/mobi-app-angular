import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { CheckBoxInputComponent } from "../components/CheckBoxInput/CheckBoxInput.component";
import { ChooseSubscriptionPlanComponent } from "../components/ChooseSubscriptionPlan/ChooseSubscriptionPlan.component";
import { SubscriptionBoxComponent } from "../components/SubscriptionBox/SubscriptionBox.component";
import { HomeComponent } from "./Home/Home.component";
import { LoginComponent } from "./Login/Login.component";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CheckBoxInputComponent,
    ChooseSubscriptionPlanComponent,
    SubscriptionBoxComponent,
  ],
  imports: [
    NzButtonModule,
    NzInputModule,
    NzDividerModule,
    NzProgressModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [],
})
export class PageModule {}
