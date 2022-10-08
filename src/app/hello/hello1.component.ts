import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello1',
  template: `<i>Hello1 {{name}}!</i><br/><br/>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class Hello1Component {
  @Input() name: string;
}
