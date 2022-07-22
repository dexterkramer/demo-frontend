import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
