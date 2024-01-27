import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrl: '../styles.scss',
})
export class MedalsPageComponent implements OnInit {
  items: Item[] = [];
  p: number = 1;
  isLoading: boolean = true;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadCases();
  }

  loadCases(): void {
    this.itemsService.getCollectibles().subscribe(
      (data) => {
        this.items = Object.values(data);

        this.isLoading = false;
      },
      (error) => console.error(error)
    );
  }
}
