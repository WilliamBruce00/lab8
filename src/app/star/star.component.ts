import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number = 0;
  @Output() dataEvent = new EventEmitter<string>();

  starWidth!: number;

  ngOnInit(): void {
    this.starWidth = (this.rating * 86) / 5;
  }

  onClick(): void {
    this.dataEvent.emit(`Đánh giá của sản phẩm là ${this.rating} sao`);
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
