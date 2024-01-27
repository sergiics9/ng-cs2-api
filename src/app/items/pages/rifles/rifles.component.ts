import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-rifles',
  templateUrl: './rifles.component.html',
  styleUrl: '../styles.scss',
})
export class RiflesPageComponent implements OnInit {
  items: Item[] = [];
  riflesOnly: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadRifles();
  }

  loadRifles(): void {
    this.itemsService.getSkins().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.riflesOnly = this.items.filter(
          (item) => item.category && item.category.name === 'Rifles'
        );

        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }
}
