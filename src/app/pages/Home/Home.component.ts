import { Component, OnInit } from "@angular/core";
import { Interests } from "src/app/models";
import { interests } from "src/app/utils/constants";
@Component({
  selector: "app-Home",
  templateUrl: "./Home.component.html",
  styleUrls: ["./Home.component.css"],
})
export class HomeComponent implements OnInit {
  dataInter = interests;
  constructor() {}
  chooseInterest: Interests[] = [];

  ngOnInit() {}

  handleSubmit() {
    console.log(this.chooseInterest);
  }

  handleActionClick(event: Interests) {
    if (!event.checked) this.chooseInterest.push(event);
    else
      this.chooseInterest = this.chooseInterest.filter(
        (item) => item.id !== event.id
      );
    event.checked = !event.checked;
  }
}
