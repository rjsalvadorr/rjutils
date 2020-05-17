import Component from '@glimmer/component';

export default class TextlistComponent extends Component {
  constructor() {
    super(...arguments);
    console.log(Object.assign({}, this.args));
  }
}
