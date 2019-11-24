const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

router.post('/image-upload', (req, res) => {
	console.log(req.files);
	if (req.files != null) {
		const values = Object.values(req.files);
		console.log(values);
		const promises = values.map(image =>
			cloudinary.uploader.upload(image.tempFilePath)
		);

		Promise.all(promises)
			.then(results => {
				res.status(200).json({
					type: 'success',
					msg: 'Image Successfully Uploaded',
					data: results
				});
			})
			.catch(error => {
				return res.status(400).json({
					type: 'error',
					msg: 'Error on uploading image, Try to upload again',
					param: 'img'
				});
			});
	} else {
		return res.status(400).json({
			type: 'error',
			msg: 'Images field is empty, Try to upload again',
			param: 'img'
		});
	}
});

module.exports = router;
