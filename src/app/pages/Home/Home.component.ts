import { Component, OnInit } from '@angular/core';
import { interests } from 'src/app/utils/constants';
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  dataInter = interests;
  constructor() {}

  ngOnInit() {}

  handleSubmit() {}
}
