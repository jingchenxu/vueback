/**
 * Created by ronaldo on 2017/10/19.
 */

var template = '<svg t="1492500959545" v-on:click="toggleClick" :style="isActive" class="wscn-icon hamburger" style="" ' +
    'viewBox="0 0 1024 1024" version="1.1" ' +
    'xmlns="http://www.w3.org/2000/svg" p-id="1691" ' +
    'xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64">' +
    '<path d="M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z" ' +
    'p-id="1692"></path> ' +
    '<path d="M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z"' +
    'p-id="1693"></path> ' +
    '<path d="M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z"' +
    'p-id="1694"></path></svg>'

var Hamburger = Vue.extend({
    template: template,
    name: 'Hamburger',
    computed: {
        isActive: function () {
            if (this.$store.getters.sidebar) {
                return {transform: 'rotate(0deg)'}
            } else {
                return {transform: 'rotate(-90deg)'}
            }
        }
    },
    methods: {
        toggleClick: function () {
            this.$store.dispatch('ToggleSideBar');
            console.log(this.$store.getters.sidebar);
        }
    }
})

