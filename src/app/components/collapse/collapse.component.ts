import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuType } from "src/app/models";

@Component({
  selector: "app-collapse",
  templateUrl: "./collapse.component.html",
  styleUrls: ["./collapse.component.css"],
})
export class CollapseComponent implements OnInit {
  @Input()
  item!: MenuType;
  @Input()
  active!: boolean;

  @Output()
  ActionClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleClick = (id: string) => {
    this.ActionClick.emit(id);
  };
}
