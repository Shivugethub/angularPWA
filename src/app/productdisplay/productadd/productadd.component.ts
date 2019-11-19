import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductdataService } from "../productdata.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-productadd",
  templateUrl: "./productadd.component.html",
  styleUrls: ["./productadd.component.css"]
})
export class ProductaddComponent implements OnInit {
  arr: Product[] = [];
  constructor(private _data: ProductdataService, private route: Router) {}

  ngOnInit() {}
  onSaveProduct(f) {
    this._data.addProduct(f.value).subscribe((data: any) => {
      console.log(data);
      console.log(f.controls);
    });
  }

  onCancel() {
    this.route.navigate(['/']);
  }
}
