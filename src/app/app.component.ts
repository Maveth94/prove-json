import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Example';
  products: any = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get('asset/data.json').subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }
}
