import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'very-cool-website';
  games = [];

  AddGame() {
    const UserInput = document.getElementById('UserInput') as HTMLInputElement;
    this.games.push(UserInput.value);
    UserInput.value = '';
  }

  inputChange() {
  }
}
