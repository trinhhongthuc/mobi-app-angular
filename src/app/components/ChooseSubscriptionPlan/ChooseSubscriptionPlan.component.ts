import { Component, OnInit } from "@angular/core";
import { SubscriptionPlanType } from "src/app/models";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-ChooseSubscriptionPlan",
  templateUrl: "./ChooseSubscriptionPlan.component.html",
  styleUrls: ["./ChooseSubscriptionPlan.component.css"],
})
export class ChooseSubscriptionPlanComponent implements OnInit {
  constructor() {}

  subscriptionPlan: SubscriptionPlanType[] = [
    {
      id: uuidv4(),
      name: "subscription",
      title: "Yearly",
      discount: "-66%",
      price: "94.80",
      date: "every year",
    },
    {
      id: uuidv4(),
      name: "subscription",
      title: "Monthly",
      discount: "-53%",
      price: "10.99",
      date: "every month",
    },
    {
      id: uuidv4(),
      name: "subscription",
      title: "Weekly",
      discount: "",
      price: "5.90",
      date: "every week",
    },
  ];

  ngOnInit() {}
}
