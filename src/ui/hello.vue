<template>
	<div>
		
		<h1> {{ title }} </h1>
		<p>Username: <input v-model="username"></p><br>
		<p>Password: <input type="password" v-model="password"> </p>
		<h3> {{ message }} </h3>

	</div>
</template>

<script>
const _ = require('lodash');
const axios = require('axios');

module.exports = {
	name: 'hello',
	props: ['title'],
	data () {
		return {
			username: '',
			message: '',
			password: ''
		};
	},

	watch: {
		username: function(){
			this.message = 'Don\'t forget to enter password...';
			this.dboUpdate();
		},
		password: function(){
			this.message = 'Waiting for you to stop typing...';
			this.dboUpdate();
		}
	},

	created: function(){
		this.dboUpdate = _.debounce(this.update, 500);
	},

	methods: {
		update: async function(){
			this.message = 'Searching for username...';

			try{
				let res = await axios.post('https://studio.iotway.net/api/v1/user/login', {
					username: this.username,
					password: this.password
				});
				//axios.defaults.headers.common['authorization'] = 'Bearer ' + res.data.token;
				this.message = 'Login successful!';
				console.log(res);
			}
			catch(err){
				this.message = 'Wrong username or password!';
				console.log(err);
			}

			//let answ = this.searchUser(this.username);
		}
	}
	

};
</script>