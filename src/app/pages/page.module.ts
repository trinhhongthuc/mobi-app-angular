import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { CheckBoxInputComponent } from "../components/CheckBoxInput/CheckBoxInput.component";
import { ChooseSubscriptionPlanComponent } from "../components/ChooseSubscriptionPlan/ChooseSubscriptionPlan.component";
import { CollapseComponent } from "../components/collapse/collapse.component";
import { SubscriptionBoxComponent } from "../components/SubscriptionBox/SubscriptionBox.component";
import { HomeComponent } from "./Home/Home.component";
import { LoginComponent } from "./Login/Login.component";
import { SettingComponent } from "./Setting/Setting.component";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CheckBoxInputComponent,
    ChooseSubscriptionPlanComponent,
    SubscriptionBoxComponent,
    SettingComponent,
    CollapseComponent,
  ],
  imports: [
    NzButtonModule,
    NzInputModule,
    NzDividerModule,
    NzProgressModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzCollapseModule,
  ],
  providers: [],
  bootstrap: [],
})
export class PageModule {}
