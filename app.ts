/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'html-sample-app'
})
@View({
  template: `
  <div>
    <span bind-inner-html="content"></span>
  </div>
  `
})
class HtmlSampleApp {
  content: string;

  constructor() {
    this.content = '<b>Some text here</b>';
  }
}

bootstrap(HtmlSampleApp);
