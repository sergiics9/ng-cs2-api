import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrl: '../styles.scss',
})
export class KeysPageComponent implements OnInit {
  items: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadCases();
  }

  loadCases(): void {
    this.itemsService.getKeys().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }
}
