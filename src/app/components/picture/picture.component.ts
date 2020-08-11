import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  url = 'https://pbs.twimg.com/media/EawVmcgXgAE2jDR?format=jpg&name=large';
  alt = 'guia do mochileiro';
  constructor() { }

  ngOnInit() {
  }

}
