import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello3',
  template: `<button type="button" class="btn btn-primary">Primary {{ name }}</button><br/><br/>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class Hello3Component {
  @Input() name: string;
  
}
