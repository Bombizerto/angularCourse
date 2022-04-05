import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { PieComponent } from './pie/pie.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ProductosComponent } from './productos/productos.component';
import { ListaComponent } from './productos/lista/lista.component';
import { EditarComponent } from './productos/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    PieComponent,
    CuerpoComponent,
    ProductosComponent,
    ListaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


