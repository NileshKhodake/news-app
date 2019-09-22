import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    public articles: any[] = [];
    public search: string;

    constructor(private newsService: NewsService) {

    }

    public ngOnInit() {
        this.fetchArticles();
    }

    public filterHeadlines() {
        this.fetchArticles(this.search);
    }

    private fetchArticles(search?: string): void {
        // Dummy article for navigation purpose,
        // replace with newsService usage

        this.newsService.topHeadlines([], search, 'en').subscribe((data) => {
            this.articles = data.articles;
        });
    }

}
