import { Component, Input } from '@angular/core';

@Component({
  selector: '[hello2]',
  template: `<i>Hello2 {{name}}!</i><br/><br/>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class Hello2Component {
  @Input() name: string;
}
