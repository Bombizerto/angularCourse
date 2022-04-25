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
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ServersComponent } from './servers/servers.component';
import { TimerComponent } from './timer/timer.component';
import { MitransformPipe } from './pipes/mitransform.pipe';
import { ServerComponent } from './servers/server/server.component';
import { FormsModule } from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ItemProductoComponent } from './lista-productos/item-producto/item-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    PieComponent,
    CuerpoComponent,
    ProductosComponent,
    ListaComponent,
    EditarComponent,
    CabeceraComponent,
    ServersComponent,
    TimerComponent,
    MitransformPipe,
    ServerComponent,
    ListaProductosComponent,
    ItemProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


