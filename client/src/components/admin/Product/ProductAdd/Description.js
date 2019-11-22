import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DescriptionItem from './DescriptionItem';
import Add from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
const Description = () => {
	const desc = {
		title: '',
		content: ''
	};
	const [description, setDescription] = useState([{ title: '', content: '' }]);

	const addField = () => {
		setDescription([...description, desc]);
	};

	const removeField = idx => {
		setDescription(description.filter((desc, index) => idx != index));
	};

	const changeValue = (idx, value) => {
		console.log(idx, value);
		description[idx] = value;
		setDescription([...description]);
	};
	return (
		<Grid container spacing={3} alignItems='flex-start'>
			{console.log(description)}
			{description.map((item, idx) => (
				<DescriptionItem
					key={idx}
					idx={idx}
					value={item}
					remove={removeField}
					set={changeValue}
				/>
			))}
			<Grid item xs={12}>
				<Button variant='contained' onClick={addField}>
					<Add />
				</Button>
			</Grid>
		</Grid>
	);
};

export default Description;
