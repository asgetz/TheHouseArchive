var currentProfile;

let itemsArray = localStorage.getItem('items') ?
	JSON.parse(localStorage.getItem('items')) : [];


class userProfile{
	constructor(email, psw){
		this.email = email;
		this.psw = psw;
	}

	setItem(){
		itemsArray.push(this.email+","+this.psw);
		localStorage.setItem('items',JSON.stringify(itemsArray));
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

function profileSet(email,psw){
	currentProfile = new userProfile(email,psw);
	currentProfile.setActive();
	// alert("Profile set!");
}