
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: '../categories/categories.module#CategoriesPageModule',
          },
          {
            path: ':parent_category_id',
            loadChildren: '../categories/categories.module#CategoriesPageModule',
          },
          {
            path: ':category_id/places',
            children: [
              {
                path: '',
                loadChildren: '../places/places.module#PlacesPageModule',
              },
              {
                path: ':place_id',
                children: [
                  {
                    path: '',
                    loadChildren: '../place-detail/place-detail.module#PlaceDetailPageModule',
                  },
                  {
                    path: 'promos',
                    children: [
                      {
                        path: '',
                        loadChildren: '../promos/promos.module#PromosPageModule',
                      },
                      {
                        path: ':promo_id',
                        loadChildren: '../promo-detail/promo-detail.module#PromoDetailPageModule',
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapPageModule',
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule',
          },
          {
            path: ':new_id',
            loadChildren: '../new-detail/new-detail.module#NewDetailPageModule',
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: '../events/events.module#EventsPageModule',
          },
          {
            path: ':event_id',
            loadChildren: '../event-detail/event-detail.module#EventDetailPageModule',
          }
        ]
      },
    ]
  },
  {
    path: 'app',
    redirectTo: '/app/categories',
    pathMatch: 'full',
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ]
})

export class TabsPageRoutingModule { }




//
