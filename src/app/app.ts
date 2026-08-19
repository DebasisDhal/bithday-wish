import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BithdayWish } from './pages/bithday-wish/bithday-wish';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BithdayWish],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bithday');

  
}
