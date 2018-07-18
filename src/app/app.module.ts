import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';

import { AuthGuard, GuestGuard, AdminGuard, AuthenticationService,
          ConfigService, JwtInterceptor, MessageService, UserService } from './infra/security';

import { CpfPipe, PreencheZeroPipe } from './infra/pipes';

import { SearchSelectModule } from './infra/components/search-select';

import { AppRotasModule } from './app-rotas.module';
import { LoginComponent } from './pages/login/login.component';
import { SidenaveComponent } from './pages/sidenav/sidenav.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ErroComponent } from './pages/erro/erro.component';
import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavService } from './pages/sidenav/sidenav.service';
import { BreadcrumbComponent } from './pages/comps/breadcrumb/breadcrumb.component';

import { ProjetoComponent } from './crud/projeto/projeto.component';
import { MenuComponent } from './crud/menu/menu.component';
import { ElementoComponent } from './crud/elemento/elemento.component';
import { ArtefatoComponent } from './crud/artefato/artefato.component';

@NgModule({
  declarations: [
    BaseComponent,
    SidenaveComponent,
    SobreComponent,
    ErroComponent,
    LoginComponent,
    ProjetoComponent,
    ArtefatoComponent,
    ElementoComponent,
    MenuComponent,
    HomeComponent,
    BreadcrumbComponent,
    CpfPipe,
    PreencheZeroPipe
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRotasModule,
    SearchSelectModule,
    NgSelectModule
  ],
  providers: [
    AuthGuard,
    GuestGuard,
    AdminGuard,
    AuthenticationService,
    ConfigService,
    JwtInterceptor,
    MessageService,
    UserService,
    SidenavService
  ],
  bootstrap: [BaseComponent]
})
export class AppModule { }
