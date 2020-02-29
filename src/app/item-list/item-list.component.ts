import { ItemDetailsComponent } from '../item-details/item-details.component';
import { Observable } from "rxjs";
import { ItemService } from '../item/item.service';
import { Item } from "../item/item";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
 
})
export class ItemListComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(private itemService: ItemService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.items = this.itemService.getItemList();
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  itemDetails(id: number){
    this.router.navigate(['details', id]);
  }
}

