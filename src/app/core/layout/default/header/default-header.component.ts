import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
