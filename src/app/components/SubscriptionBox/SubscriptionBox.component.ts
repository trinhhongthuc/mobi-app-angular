import { Component, Input, OnInit } from "@angular/core";
import { SubscriptionPlanType } from "src/app/models";

@Component({
  selector: "app-SubscriptionBox",
  templateUrl: "./SubscriptionBox.component.html",
  styleUrls: ["./SubscriptionBox.component.css"],
})
export class SubscriptionBoxComponent implements OnInit {
  @Input()
  item!: SubscriptionPlanType;

  constructor() {}

  ngOnInit() {}
}
