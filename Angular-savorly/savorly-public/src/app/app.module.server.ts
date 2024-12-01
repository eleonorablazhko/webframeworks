import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [HomeListComponent],
})
export class AppServerModule {}
