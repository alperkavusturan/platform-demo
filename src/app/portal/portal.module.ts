import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from '../core/core.module';
import { PortalComponent } from './portal.component';
import { PRODUCT_SERVICE, WAITING_LIST_SERVICE } from '../core/di';
import { ProductService, WaitingListService } from '../core/services/index';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
	AppRoutingModule,
	HttpClientModule,
	CoreModule,
    SharedModule
  ],
  exports:[
	  PortalComponent
  ],
  entryComponents: [
		PortalComponent
  ],
  providers:[
	  {
		  provide: WAITING_LIST_SERVICE,
		  useClass: WaitingListService
	  },
	  {
		  provide: PRODUCT_SERVICE,
		  useClass: ProductService
	  }
  ]
})
export class PortalModule { }
