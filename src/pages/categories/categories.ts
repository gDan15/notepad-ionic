import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Category } from '../../category';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories:Category[];
  selectedCategory:Category;
  category : Category;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoryService : CategoryService) {
  }
  ngOnInit() {
      this.getCategories();
  }

  getCategories() : void{
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  goToDetail(category: Category) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    // this.selectedCategory = category;
    this.navCtrl.push('detailCategory',{'id': category.id});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
