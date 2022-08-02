import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Interests } from "src/app/models";

@Component({
  selector: "app-CheckBoxInput",
  templateUrl: "./CheckBoxInput.component.html",
  styleUrls: ["./CheckBoxInput.component.css"],
})
export class CheckBoxInputComponent implements OnInit {
  @Input() item!: Interests;
  @Output()
  chooseItem: EventEmitter<Interests> = new EventEmitter<Interests>();
  constructor() {}

  ngOnInit() {}

  handleChooseItem(item: Interests) {
    this.chooseItem.emit(item);
  }
}
