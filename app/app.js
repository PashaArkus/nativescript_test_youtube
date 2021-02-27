import Vue from "nativescript-vue";

import Home from "./components/Home";
Vue.registerElement('YoutubePlayer', () => require('@triniwiz/nativescript-youtubeplayer').YoutubePlayer);
new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
