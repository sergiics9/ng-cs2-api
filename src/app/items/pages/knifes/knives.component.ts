import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-knives',
  templateUrl: './knives.component.html',
  styles: `.loader{
    display: flex;
    justify-content: center;
    padding-top: 5rem
  }`,
})
export class KnivesPageComponent implements OnInit {
  items: Item[] = [];
  knivesOnly: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadKnives();
  }

  loadKnives(): void {
    this.itemsService.getSkins().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.knivesOnly = this.items.filter(
          (item) => item.category && item.category.name === 'Knives'
        );

        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }
}
