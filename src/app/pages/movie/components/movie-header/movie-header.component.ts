import { Component } from '@angular/core';
import { FiltersService } from '../../services/filter.service';
import { ResponseProcessService } from '../../services/respons-process.service';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss'],
})
export class MovieHeaderComponent {
  title = '';
  year = '';
  constructor(
    private filtersService: FiltersService,
    private responseProcessService: ResponseProcessService,
  ) {}
  search() {
    this.filtersService.title = this.title;
    this.filtersService.year = this.year;
    this.filtersService.page = 1;
    console.log('year: ', this.filtersService.year);
    console.log('name: ', this.filtersService.year);
    this.responseProcessService
      .responseDistributions()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
  }
}
