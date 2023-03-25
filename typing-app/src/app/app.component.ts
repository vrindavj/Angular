import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence(5);
  enteredText = '';
  showSuccess = false;

  onTextInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;
    if (this.enteredText === this.randomText) {
      this.showSuccess = true;
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'wrong';
  }
}
