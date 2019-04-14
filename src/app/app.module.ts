import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService } from 'src/services/translate.service';
import { TranslatePipe } from './components/pipe/translate.pipe';
import { FormComponent } from './components/form/form.component';
import { ConstructionComponent } from './components/construction/construction.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { CookieService } from 'ngx-cookie-service';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('nl_advanced');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TranslatePipe,
    FormComponent,
    ConstructionComponent,
    DetailsComponent,
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CookieService,
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
