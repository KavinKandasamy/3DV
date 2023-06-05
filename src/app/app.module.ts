import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngleFluidRendererComponent } from './modules/dashboard/Components/Displacement/angle-fluid-renderer/angle-fluid-renderer.component';
import { BaseFluidRendererComponent } from './modules/dashboard/Components/Displacement/base-fluid-renderer/base-fluid-renderer.component';
import { CasingRendererComponent } from './modules/dashboard/Components/Displacement/casing-renderer/casing-renderer.component';
import { DepthFluidRendererComponent } from './modules/dashboard/Components/Displacement/depth-fluid-renderer/depth-fluid-renderer.component';
import { FluidRendererComponent } from './modules/dashboard/Components/Displacement/fluid-renderer/fluid-renderer.component';
import { OverlayRendererComponent } from './modules/dashboard/Components/Displacement/overlay-renderer/overlay-renderer.component';
import { UnrolledViewRendererComponent } from './modules/dashboard/Components/Displacement/unrolled-view-renderer/unrolled-view-renderer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DepthComponent } from './modules/dashboard/Components/depth/depth.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    AngleFluidRendererComponent,
    BaseFluidRendererComponent,
    CasingRendererComponent,
    DepthFluidRendererComponent,
    FluidRendererComponent,
    OverlayRendererComponent,
    UnrolledViewRendererComponent,
    HeaderComponent,
    DashboardComponent,
    DepthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
