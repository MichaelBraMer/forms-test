import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from './app/forms/forms.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms-frontend';
}
