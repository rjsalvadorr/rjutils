import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BasicUtilComponent extends Component {
  constructor() {
    super(...arguments);
    console.log(Object.assign({}, this.args));
  }

  @tracked
  utilOutput = [];
  utilFunction = null;

  defaultUtil() {
    return [
      'you',
      'just',
      'triggered',
      'the',
      'default',
      'util',
    ]
  }

  @action
  runUtil() {
    if(typeof this.utilFunction === 'function') {
      this.utilOutput = this.utilFunction();
    } else {
      this.utilOutput = this.defaultUtil();
    }
  }
}
