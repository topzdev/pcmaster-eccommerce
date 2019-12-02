const storageName = 'pcmaster-cart';

export const addCart = cart => {
	let data = JSON.parse(sessionStorage.getItem(storageName));

	if (!data) {
		data = [];
		data.push(cart);
	} else {
		data.push(cart);
	}

	sessionStorage.setItem(storageName, JSON.stringify(data));
};

export const removeCart = id => {
	let data = JSON.parse(sessionStorage.getItem(storageName));

	data = data.filter(item => item.id != id);

	sessionStorage.setItem(storageName, JSON.stringify(data));
};

export const updateCart = value => {
	let data = JSON.parse(sessionStorage.getItem(storageName));

	data = data.map(item => (item.id === value.id ? value : item));

	sessionStorage.setItem(storageName, JSON.stringify(data));
};

export const getCart = () => {
	return JSON.parse(sessionStorage.getItem(storageName)) || [];
};
