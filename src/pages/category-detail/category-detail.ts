import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from '../../category.service';
import { Category } from '../../category';

import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CategoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:'detailCategory',
    segment: 'detailCategory/:id'
  }
)
@Component({
  selector: 'page-category-detail',
  templateUrl: 'category-detail.html',
})
export class CategoryDetailPage {
  @Input() category: Category;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) {}
  ngOnInit() : void {
    this.getCategory();
  }
  getCategory(): void {
    const id = this.navParams.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryDetailPage');
  }

}
