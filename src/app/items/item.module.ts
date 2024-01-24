import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [CardComponent],
})
export class ItemModule {}
