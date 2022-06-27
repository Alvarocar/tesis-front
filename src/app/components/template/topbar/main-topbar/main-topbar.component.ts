import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-topbar',
  templateUrl: './main-topbar.component.html',
  styleUrls: ['./main-topbar.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class MainTopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
