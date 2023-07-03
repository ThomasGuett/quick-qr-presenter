import { Component, OnInit, DoCheck, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  displayUrl = ""

  @Input() url: String = ""

  constructor() {}

  ngOnInit() {}

  update(event:any){
    this.displayUrl = event.target.value;
  }
}
