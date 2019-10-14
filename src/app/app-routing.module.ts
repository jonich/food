import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { AuthResolver } from './services/auth.resover';

const routes: Routes = [
  {
    path: 'welcome',
    resolve: {
      auth: AuthResolver
    },
    loadChildren: './pages/welcome/welcome.module#WelcomeModule'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: './pages/menu/menu.module#MenuModule' },
      { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
      { path: 'google-maps', loadChildren: './pages/google-maps/google-maps.module#GoogleMapsModule' },
      { path: 'contact-us', loadChildren: './pages/contact-us/contact-us.module#ContactUsModule' },
      { path: 'cart', loadChildren: './pages/cart/cart.module#CartModule' },
      { path: 'favorites', loadChildren: './pages/favorites/favorites.module#FavoritesModule' },
      { path: 'checkout', loadChildren: './pages/order-processing/order-processing.module#OrderProcessingModule' },
      { path: 'fb-posts', loadChildren: './pages/fb-posts/fb-posts.module#FbPostsModule' },
      { path: 'events', loadChildren: './pages/events/events.module#EventsModule' },
      { path: 'albums', loadChildren: './pages/albums/albums.module#AlbumsModule' },
      { path: 'articles', loadChildren: './pages/articles/articles.module#ArticlesModule' },
      { path: 'drupal-posts', loadChildren: './pages/drupal/drupal.module#DrupalModule' },
      { path: 'wp-posts', loadChildren: './pages/wordpress/wordpress.module#WordpressModule' }
    ]
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
