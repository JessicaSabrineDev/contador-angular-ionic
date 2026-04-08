import { ContadorComponent } from './contador/contador.component';
import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonicModule, ContadorComponent]
})
export class AppComponent {
  constructor() {}
}
