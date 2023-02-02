import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { article } from  './article';
import { Observable } from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost";
  constructor(private httpClient: HttpClient) {}
  readArticles(): Observable<article[]>{
    return this.httpClient.get<article[]>(`${this.PHP_API_SERVER}/projetAngular/backend/api/read.php`);
  }
}
