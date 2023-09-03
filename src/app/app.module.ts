import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmComponent } from './pages/movie/components/film/film.component';
import { MovieHeaderComponent } from './pages/movie/components/movie-header/movie-header.component';
import { PopupComponent } from './pages/movie/components/popup/popup.component';
import { WatchesComponent } from './pages/watch/watch.component';
import { AnalogWatchComponent } from 'src/app/pages/watch/components/analog-watch/analog-watch.component';
import { DigitalWatchComponent } from 'src/app/pages/watch/components/digital-watch/digital-watch.component';
import { NumericComponent } from 'src/app/pages/watch/components/digital-watch/components/numeric/numeric.component';
import { SeparatorComponent } from 'src/app/pages/watch/components/digital-watch/components/separator/separator.component';
import { ButtonActionComponent } from './pages/calculator/components/button-action/button-action.component';
import { ButtonNumericComponent } from './pages/calculator/components/button-numeric/button-numeric.component';
import { ButtonOperationComponent } from './pages/calculator/components/button-operation/button-operation.component';
import { DisplayComponent } from './pages/calculator/components/display/display.component';
import { GeneralButtonComponent } from './pages/calculator/components/general-button/general-button.component';
import { EnumPipePipe } from 'src/app/pages/calculator/shared/pipes/enum-pipe.pipe';
import { MovieComponent } from './pages/movie/movie.component';
import { PaginatorComponent } from './pages/movie/components/paginator/paginator.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    HeaderComponent,
    WatchesComponent,
    AnalogWatchComponent,
    DigitalWatchComponent,
    NumericComponent,
    SeparatorComponent,
    WatchesComponent,
    ButtonActionComponent,
    ButtonNumericComponent,
    ButtonOperationComponent,
    DisplayComponent,
    GeneralButtonComponent,
    EnumPipePipe,
    MovieComponent,
    MovieHeaderComponent,
    PaginatorComponent,
    FilmComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
