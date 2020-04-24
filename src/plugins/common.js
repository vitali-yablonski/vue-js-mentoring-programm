import hasIntersectionWithElement from '../directives/hasIntersectionWithElement.js';

export default {
    install(Vue) {
        Vue.directive('hasIntersectionWithElement', hasIntersectionWithElement);
    }
}
