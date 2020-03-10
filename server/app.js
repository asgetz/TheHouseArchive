let usersArray = localStorage.getItem('items') ?
	JSON.parse(localStorage.getItem('items')) : [];

var currentProfile;

class userProfile{
	constructor(username, psw){
		this.username = username;
		this.psw = psw;
	}

	setItem(){
		usersArray.push(this.username+","+this.psw);
		localStorage.setItem('items',JSON.stringify(usersArray));
	}

	setActive(){
		this.active = true;
	}

	setInactive(){}
	getItem(){}
	removeItem(){}
	clear(){}

	static fromJSON(serializedJson){
		return Object.assign(new userProfile(),JSON.parse(serializedJson));
	}
}

function profileLoginSet(username,psw){
	currentProfile = new userProfile(username,psw);
	currentProfile.setActive();
	sessionStorage.setItem('current',JSON.stringify(currentProfile));
}