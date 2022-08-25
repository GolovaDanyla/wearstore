import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';



const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'price', component: PriceComponent},
    // {path: '', component: HomeComponent},
];
export const routing = RouterModule.forRoot(appRoutes);