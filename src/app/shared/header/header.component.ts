import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  LoggedInUserName!: string | null;
  @Input() isMax: boolean = false;

  @Output() changeView = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.LoggedInUserName = localStorage.getItem("LoggedInUserName");
  }


  toggleView() {
    this.isMax = !this.isMax;
    this.changeView.emit(this.isMax);
  }

}
