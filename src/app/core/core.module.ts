import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
