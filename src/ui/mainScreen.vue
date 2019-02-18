<template>
	<div>
		<hello title="Enter iotway user and password"></hello>
		<!-- <p> {{ childProp() }} </p> -->
	</div>
</template>

<script>
const hello = require('./hello.vue');

module.exports = {
	name: 'mainScreen',
	components: {
		hello
	},
	methods: {
		childProp: function(){
			return 'ana are mere multe';
		}
	}
};
</script>
