import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { Cart } from '../cart/cart';
import { ChangeQuantityService } from '../cart/change-quantity.service';
import { FavoritesService } from '@services/favorites.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProvider } from '@services/data/base.data-provider';

@Component({
  templateUrl: './product.html',
  selector: 'product-page',
  styleUrls: ['./product.page.scss']
})
export class ProductPage implements OnInit {
  productId: any;
  product: any;
  price: any;
  price2: any;
  categoryId: string;
  


  get isInFavorites() {
    return this.favorites.isInFavorites(this.product.guid);
  }

  constructor(
    private cartService: Cart,
    private quantityService: ChangeQuantityService,
    private favorites: FavoritesService,
    private toastr: ToastController,
    // private resolver: ProductResolver,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private data: DataProvider
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const { id, catId } = params;
      this.productId = id;
      this.categoryId = catId;
      console.log(id)
      console.log(catId)
      this.data.getProduct(this.productId).then(product => {
        this.product = product["product"][0];
        //this.product = product.product[0];

        this.price2=this.product.price;

      //  let  kk=[];
     //   kk[0].name="AAA";

     this.product.standardOptions=[];

      this.product.extraOptions=[
        {
          "name": "Σιρόπι σοκολάτα",
          "selected": false,
          "value": "1"
        },
        {
          "name": "Σιρόπι φουντούκι",
          "selected": false,
          "value": "0.3"
        },
        {
          "name": "Σιρόπι καραμέλα",
          "selected": false,
          "value": "0.3"
        },
        {
          "name": "Σιρόπι φράουλα",
          "selected": false,
          "value": "0.3"
        },
        {
          "name": "Σαντιγύ",
          "selected": false,
          "value": "0.3"
        },
        {
          "name": "Κρέμα",
          "selected": false,
          "value": "0.3"
        },
        {
          "name": "Extra δόση espresso",
          "selected": false,
          "value": "0.5"
        }
      
      ];

      this.product.price=[
        {
          "name": "Μονός",
          "value": "1",
          "currency": "$",
          "checked": true
        },
        {
          "name": "Διπλός",
          "value": "1.8",
          "currency": "$",
          "checked": false
        },
        
        {
          "name": "Τριπλός",
          "value": "2.4",
          "currency": "$",
          "checked": false
        }
        ,
        {
          "name": "Τετραπλός",
          "value": "2.9",
          "currency": "$",
          "checked": false
        }
      ]


      });
    });
  }

  async quickAddToCart() {
    this.pushToCart(1);
    const alert = await this.toastr.create({ message: 'Item added to cart', duration: 3000 });
    await alert.present();
  }

  async addToCart() {
    const quantity = await this.quantityService.changeQuantity();
    this.pushToCart(quantity);
    const alert = await this.toastr.create({ message: 'Item added to cart', duration: 3000 });
    await alert.present();
  }

  private pushToCart(quantity: number) {

     console.log(this.price.value)
     console.log(this.product.price)
     console.log(this.product)

    this.cartService.addToCart({
      quantity,
      name: this.product.title,
      price: this.price.value,
      price2: this.price2,
      size: this.price.name,
      picture: this.product.myimage,
      description: this.product.body,
      options: this.getSelectedOptions(this.product.standardOptions).concat(this.getSelectedOptions(this.product.extraOptions))
    });
  }

  async toggleFavorites() {
    if (this.isInFavorites) {
      this.favorites.deleteItem(this.product.guid);
      const alert = await this.toastr.create({ message: this.product.title + ' has been removed from your Favorites', duration: 3000 });
      alert.present();
    } else {

      //this.productId = id;

      this.favorites.addItem({
        guid: this.product.id,
        thumb: this.product.myimage,
        name: this.product.title,
        description: this.product.body,
        categoryId: this.categoryId
      });
      const alert = await this.toastr.create({ message: this.product.title + ' has been added to your Favorites', duration: 3000 });
      alert.present();
    }
  }

  private getSelectedOptions(options) {
    return (options || []).filter(x => x.selected).map(option => ({ name: option.name, value: option.value || 0 }));
  }
}
