import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/repo.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item?: Item;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      of(id)
        .pipe(
          concatMap((id) => this.itemsService.getSkins()),
          concatMap((items) => {
            this.item = items.find((item) => item.id === id);
            return this.item ? of([]) : this.itemsService.getCollections();
          }),
          concatMap((items) => {
            if (!this.item) {
              this.item = items.find((item) => item.id === id);
            }
            return this.item ? of([]) : this.itemsService.getCrates();
          })
        )
        .subscribe((items) => {
          if (!this.item) {
            this.item = items.find((item) => item.id === id);
          }
        });
    }
  }

  goBack() {
    this.location.back();
  }
}
