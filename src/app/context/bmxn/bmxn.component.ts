import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bmxn',
  templateUrl: './bmxn.component.html',
  styleUrls: ['./bmxn.component.scss']
})
export class BmxnComponent implements OnInit {
  @Input()
  public theme: string;

  constructor() {}

  ngOnInit() {}
}
