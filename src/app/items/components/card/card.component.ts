import { Component, OnInit } from '@angular/core';

import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-items',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  items: Item[] = [];
  p: number = 1;
  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemsService.getAll().subscribe(
      (data) => {
        this.items = Object.values(data);
      },
      (error) => console.error(error)
    );
  }
}
