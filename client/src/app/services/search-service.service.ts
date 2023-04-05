import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Review } from '../models/Review';
import { Comments } from '../models/Comments';

const SPRINGBOOT_URL = "/api"

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }
  
  getRevList(search: string): Promise<Review[]> {
    let params = new HttpParams()
      .set('search', search)
    // send for springboot
    return lastValueFrom(
      this.http.get<Review[]>(SPRINGBOOT_URL, { params })
    )
  }
  
  postComment(title: string, comment: Comments) {
    const completeUrl = SPRINGBOOT_URL + "/comment/" + title
    const payload = comment
    console.info("payload > " + payload)
    return lastValueFrom(
      this.http.post<Comment>(completeUrl, payload)
    )
  }
  
}
