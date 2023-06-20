import { Component, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
hideModal() {
throw new Error('Method not implemented.');
}
showModal: any;
  @Input()
  cardTitle!: string;
  @Input()
  cardDescription!: string;
  @Input()
  cardImageSrc!: string;
@Output() openModalEvent = new EventEmitter<void>();
openModal(): void {
  this.openModalEvent.emit();
}
}
