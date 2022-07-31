import { Component, Input, OnInit } from '@angular/core';
import { Interests } from 'src/app/models';

@Component({
  selector: 'app-CheckBoxInput',
  templateUrl: './CheckBoxInput.component.html',
  styleUrls: ['./CheckBoxInput.component.css'],
})
export class CheckBoxInputComponent implements OnInit {
  @Input() item!: Interests;
  constructor() {}

  ngOnInit() {
    console.log(this.item);
  }
}
