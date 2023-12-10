import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { BlogComponent } from './blog/blog.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';

import { FormsModule } from '@angular/forms';
import { Ptbac1Component } from './ptbac1/ptbac1.component';
import { Cpn78Component } from './cpn78/cpn78.component';
import { BindingPropertyComponentComponent } from './binding-property-component/binding-property-component.component';
import { BindingClassComponentComponent } from './binding-class-component/binding-class-component.component';
import { BindingEventComponentComponent } from './binding-event-component/binding-event-component.component';
import { BindingStyleComponentComponent } from './binding-style-component/binding-style-component.component';
import { BindingTwoWayComponentComponent } from './binding-two-way-component/binding-two-way-component.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { Ptbac2Component } from './ptbac2/ptbac2.component';
import { ContactComponent } from './contact/contact.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ListProduct3Component } from './list-product3/list-product3.component';
import { ListProduct4Component } from './list-product4/list-product4.component';
import { ListProduct5Component } from './list-product5/list-product5.component';
import { ListProduct6Component } from './list-product6/list-product6.component';
import { ListProduct7Component } from './list-product7/list-product7.component';
import { HttpClientModule} from '@angular/common/http';
import { Exercise86JsonComponent } from './exercise86-json/exercise86-json.component';
import { Ex89ArrProductCatalogComponent } from './ex89-arr-product-catalog/ex89-arr-product-catalog.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { Exercise89Component } from './exercise89/exercise89.component';
import { Exercise90HttpserviceComponent } from './exercise90-httpservice/exercise90-httpservice.component';
import { ProductHttpService } from './Server/product-http.service';
import { ServiceProductHttpComponent } from './service-product-http/service-product-http.component';
import { AboutComponent } from './about/about.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoginComponent } from './login/login.component';
import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error/service-product-http-handle-error.component';
import { Exercise92Component } from './exercise92/exercise92.component';
import { Exercise93Component } from './exercise93/exercise93.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerComponent } from './customer/customer.component';
import { DongAbankComponent } from './dong-abank/dong-abank.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { BitcoinPriceIndexComponent } from './bitcoin-price-index/bitcoin-price-index.component';
import { KeyValuePipe } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { RestfulAPISelfStudyComponent } from './restful-api-self-study/restful-api-self-study.component';
// import { BookDetailsComponent } from './book-details/book-details.component';
import { BookManagementComponent } from './Restful API/book-management/book-management.component';
import { BookEditComponent } from './Restful API/book-edit/book-edit.component';
import { CurriculumsComponent } from './curriculums/curriculums.component';
import { CurriculumUpdateComponent } from './curriculum-update/curriculum-update.component';
import { CurriculumNewComponent } from './curriculum-new/curriculum-new.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TestComponent,
    BlogComponent,
    ThirdComponent,
    FourComponent,
    Ptbac1Component,
    Cpn78Component,
    BindingPropertyComponentComponent,
    BindingClassComponentComponent,
    BindingEventComponentComponent,
    BindingStyleComponentComponent,
    BindingTwoWayComponentComponent,
    SlideShowComponent,
    Ptbac2Component,
    ContactComponent,
    ListProductComponent,
    ListProduct2Component,
    ListProduct3Component,
    ListProduct4Component,
    ListProduct5Component,
    ListProduct6Component,
    ListProduct7Component,
    Exercise86JsonComponent,
    Ex89ArrProductCatalogComponent,
    ServiceProductImageEventComponent,
    Exercise89Component,
    Exercise90HttpserviceComponent,
    ServiceProductHttpComponent,
    RoutingComponent,
    AboutComponent,
    PagenotFoundComponent,
    TopmenuComponent,
    LeftMenuComponent,
    LoginComponent,
    ServiceProductHttpHandleErrorComponent,
    Exercise92Component,
    Exercise93Component,
    ProductDetailsComponent,
    CustomerComponent,
    DongAbankComponent,
    FakeProductComponent,
    BitcoinPriceIndexComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    RestfulAPISelfStudyComponent,
    // BookDetailsComponent,
    BookManagementComponent,
    BookEditComponent,
    BookNewComponent,
    CurriculumsComponent,
    CurriculumUpdateComponent,
    CurriculumNewComponent,
    CurriculumDetailComponent,
    FashionComponent,
    FashionDetailComponent,
    FashionNewComponent,
    FashionUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeyValuePipe,
    
  ],
  providers: [ProductHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
