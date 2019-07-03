const wifi = require('./index');

wifi().then(password => {
	console.log(password);
});