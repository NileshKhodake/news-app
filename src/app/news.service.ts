import { Injectable } from '@angular/core';
import { NewsApiService } from 'angular-news-api';
// import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(private newsApiService: NewsApiService) {}

    /**
     * Consume the NewsApiService here, make sure
     * to set the language to 'en' english and built
     * in the search functionality using the 'q'
     * variable in API calls to news-api
     */

    topHeadlines(sources, q, language) {
        return this.newsApiService.topHeadlines({
              sources: sources.join(),
              q: q,
              language: language
            });
       }
}
