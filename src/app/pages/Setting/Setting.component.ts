import { Component, OnInit } from "@angular/core";
import { MenuSetting } from "src/app/utils/constants";
import { MenuType } from "../../models/index";

@Component({
  selector: "app-Setting",
  templateUrl: "./Setting.component.html",
  styleUrls: ["./Setting.component.css"],
})
export class SettingComponent implements OnInit {
  MenuSetting: MenuType[] = MenuSetting;
  constructor() {}

  ngOnInit() {}

  handleAction(id: string) {
    this.MenuSetting.forEach((item) => {
      if (item.id === id && item.active === false) item.active = true;
      else if (item.id === id && item.active === true) item.active = false;
    });
  }
}
