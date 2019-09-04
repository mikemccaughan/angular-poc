import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bmx4',
  templateUrl: './bmx4.component.html',
  styleUrls: ['./bmx4.component.scss']
})
export class Bmx4Component implements OnInit {
  @Input()
  public theme: string;

  constructor() {}

  ngOnInit() {}
}
