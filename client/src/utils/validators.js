const validateDuplicate = (toValidate, list) => {
	for (let i = 0; i < list.length; i++) {
		if (list[i]._id === toValidate) {
			console.log(list[i]._id, toValidate);
			return true;
		}
	}
	return false;
};

export default validateDuplicate;
