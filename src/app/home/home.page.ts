import { ContadorComponent } from '../contador/contador.component';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonicModule,ContadorComponent],
})
export class HomePage {
  constructor() {}
}
