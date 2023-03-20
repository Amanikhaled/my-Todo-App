import { Component } from '@angular/core';
type Todo = {
  id: number,
  name: string,
  status: boolean,

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ToDO';
  // todo: Todo = { id: 0, name: '', status: false };
  list: Todo[] = [];
  AddTask(item: string) {

    this.list.push({ id: this.list.length, name: item, status: true });

  }
  DeleteItem(id: number) {
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id)
  }
  Done(item: Todo) {
    item.status = !item.status;
  }


}
