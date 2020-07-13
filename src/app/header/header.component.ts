import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
