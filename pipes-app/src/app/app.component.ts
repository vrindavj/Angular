import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  height: number = 0;
  miles: number = 0;
  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.amount = target.value;
  }

  onHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.height = parseFloat(target.value);
  }

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.miles = parseFloat(target.value);
  }
}
