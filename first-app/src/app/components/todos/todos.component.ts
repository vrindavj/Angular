import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  inputTodo: string = '';
  @ViewChild('todoForm', { static: false }) todoForm: NgForm;
  ngOnInit(): void {
    this.todos = [
      { content: 'First Todo', completed: false },
      { content: 'Second Todo', completed: true },
    ];
  }

  toggleDone = (id: number) => {
    this.todos.map((todo, i) => {
      if (i === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  };

  deleteTodo = (id: number) => {
    this.todos = this.todos.filter((todo, index) => index !== id);
  };

  submitTodo = () => {
    console.log(this.todoForm);
    if (this.inputTodo) {
      this.todos.push({ content: this.inputTodo, completed: false });
      this.inputTodo = '';
      // this.todoForm.resetForm();
    }
  };
}
