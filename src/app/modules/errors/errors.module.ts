import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorsRoutingModule } from './errors.routing.module';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';

@NgModule({
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ],
  declarations: [NotFoundComponent],
  providers:[{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }]
})
export class ErrorsModule { }
