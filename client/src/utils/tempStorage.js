export const addStorage = (value, storageName) => {
	let data = getStorage(storageName);

	data.push(value);

	sessionStorage.setItem(storageName, JSON.stringify(data));
};

export const removeStorage = (id, storageName) => {
	let data = getStorage(storageName);

	data = data.filter(item => item._id != id);

	sessionStorage.setItem(storageName, JSON.stringify(data));
};

export const updateStorage = (value, storageName) => {
	let data = getStorage(storageName);

	data = data.map(item => (item._id === value.id ? value : item));

	sessionStorage.setItem(storageName, JSON.stringify(data));
};

export const getStorage = storageName => {
	return JSON.parse(sessionStorage.getItem(storageName)) || [];
};
