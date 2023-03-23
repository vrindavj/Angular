import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    this.length = parseInt(target.value);
    console.log(this.length);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  /**
   * function to generate the password
   */
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdegfhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!#€%&;:._=?+*-';
    this.password = 'My password';
    let validChars = '';
    if (this.includeSymbols) {
      validChars += symbols;
    }
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
    // console.log(
    //   generatedPassword,
    //   this.includeLetters,
    //   this.includeSymbols,
    //   this.includeNumbers,
    //   'clicked'
    // );
  }
}
