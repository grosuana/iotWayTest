const Vue = require('vue');
const mainScreen = require('./mainScreen.vue');
new Vue({
	el: '#app',
	render: function(render) {
		return render(mainScreen);
	}
});