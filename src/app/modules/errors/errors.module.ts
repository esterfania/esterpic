import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorsRoutingModule } from './errors.routing.module';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { GlobalErrorComponent } from './global-error/global-error.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ],
  declarations: [NotFoundComponent, GlobalErrorComponent],
  providers:[{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }]
})
export class ErrorsModule { }
