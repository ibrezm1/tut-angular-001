import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<i>Hello {{name}}!</i><br/><br/>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
