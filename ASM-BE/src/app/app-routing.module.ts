import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ptbac1Component } from './ptbac1/ptbac1.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { AboutComponent } from './about/about.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { LoginComponent } from './login/login.component';
import { ServiceProductHttpComponent } from './service-product-http/service-product-http.component';
import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error/service-product-http-handle-error.component';
import { Exercise92Component } from './exercise92/exercise92.component';
import { Exercise93Component } from './exercise93/exercise93.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerComponent } from './customer/customer.component';
import { DongAbankComponent } from './dong-abank/dong-abank.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { BitcoinPriceIndexComponent } from './bitcoin-price-index/bitcoin-price-index.component';
import { BookDetailsComponent } from './Restful API/book-details/book-details.component';
import { RestfulAPISelfStudyComponent } from './restful-api-self-study/restful-api-self-study.component';
// import { BookManagementComponent } from './restful-api-self-study/book-management/book-management.component';
import { BookEditComponent } from './Restful API/book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookNewComponent1 } from './Restful API/book-new/book-new.component';
import { CurriculumsComponent } from './curriculums/curriculums.component';
import { CurriculumUpdateComponent } from './curriculum-update/curriculum-update.component';
import { CurriculumNewComponent } from './curriculum-new/curriculum-new.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';


const routes: Routes = [
  // Trang chủ
  // { path: "", redirectTo: "/GioiThieu", pathMatch: "full" },

  // { path: "ptbac1", component: Ptbac1Component },
  // { path: "Slide", component: SlideShowComponent },
  // { path: "GioiThieu", component: AboutComponent },
  // { path: "Dssp", component: ServiceProductHttpComponent },
  // { path: "product", component: ListProductComponent },
  // { path: "product/:id", component: ProductDetailsComponent },
  // { path: "Login", component: LoginComponent },
  // { path: "Ex91", component: ServiceProductHttpHandleErrorComponent },
  // { path: "Ex92", component: Exercise92Component },
  // { path: "Ex93", component: Exercise93Component },
  // { path: "customer", component: CustomerComponent },
  // { path: "dongabank", component: DongAbankComponent },
  // { path: "FakeProduct", component: FakeProductComponent },
  // { path: "Bitcoin", component: BitcoinPriceIndexComponent },
  // { path: "book-details", component: BookDetailsComponent },
  // { path: "API", component: RestfulAPISelfStudyComponent },
  // { path: "edit-book", component: BookEditComponent },
  // { path: "new-book", component: BookNewComponent1 },
  // { path:"", redirectTo:"curriculum", pathMatch:"full"},
  // { path: 'curriculum', component: CurriculumsComponent },
  // { path: 'curriculum-detail/:id', component: CurriculumDetailComponent },
  // { path: 'curriculum-update/:id', component: CurriculumUpdateComponent },
  // { path: 'curriculum-new', component: CurriculumNewComponent },
  
  { path: "GioiThieu", component: FashionComponent},
  // { path: "search", component: FashionDetailComponent},
  { path: "Fashion-update:id", component: FashionUpdateComponent},
  { path: "Fashion-new:id", component: FashionNewComponent},
  { path: "Fashion-detail:id", component: FashionDetailComponent},
  { path: "**", component: PagenotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [Ptbac1Component, ProductDetailsComponent, SlideShowComponent, AboutComponent]