
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Components
import { ComponentsModule } from '../../components/components.module';

// Pages
import { CategoriesPage } from './categories.page';

//Services
import { CategoriesService } from '../../services/categories.service';

// Resolvers
//import { CategoriesResolver } from './categories.resolver';

// Routers
import { CategoriesPageRoutingModule } from './categories.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    CategoriesPage,
  ],
  providers: [
    CategoriesService
    //CategoriesResolver
  ]
})
export class CategoriesPageModule {}
