import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { OpacityDirective } from './opacity.directive';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule,MatInputModule} from '@angular/material';
import { MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { MaterialcodeDirective } from './materialcode.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    OpacityDirective,
    MaterialcodeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
