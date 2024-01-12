import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input()
  size: number = 0;
  @Input()
  total: number = 0;
  currentPage: number = 1;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>()

  get nbPages(): number {
    return Math.ceil(this.total / this.size)
  }

  get pages(): number[] {
    return Array.from(Array(this.nbPages), (_, index) => index + 1)
  }

  navigate(page: number) {
    if(page < 1 || page > this.nbPages) return;
    this.currentPage = page
    this.pageChange.emit(this.currentPage)
  }
}
