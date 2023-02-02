import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { article } from  '../article';
import { HttpClient } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
   providers: []
})
export class CardComponent implements OnInit {
  data:  any[] = [];
  constructor(private http: HttpClient , private Articleservice: ApiService,private primengConfig: PrimeNGConfig) { }
  ngOnInit(): void {
    this.primengConfig.ripple = true;

   this.getArticles();
    //this.http.get('http://localhost/projetAngular/backend/api/read.php').subscribe(data => {
  //  this.data.push(data);
  //  console.log(this.data);
  //  }, error => console.error(error));
  }
getArticles(){
  this.Articleservice.readArticles().subscribe((data: article[])=>{
    this.data.push(data);
    console.log(this.data);
  })}
}
