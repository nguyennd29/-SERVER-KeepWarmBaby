const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
	username: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	receiver: [{
		mail: { type: String},
		mailContent: { type: String},
		receiverLocation: { type: String},
		timeReceive: { type: Date}
	}]
},{
	timestamp: true
});

UserSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		const salt = bcrypt.genSaltSync();
		const hashPassword = bcrypt.hashSync(this.password, salt);
		bcrypt.compareSync(this.password, hashPassword);
		this.password = hashPassword;
	}
	next();
});

module.exports = mongoose.model('User', UserSchema);