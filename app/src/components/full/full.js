import template from './full.html';
import styles from './full.css';

export default {
  template,
  controllerAs: 'full',
  bindings: {
    url: '=',
    title: '=',
    description: '='
  },
  controller: function(){
    this.styles = styles;
  }
};