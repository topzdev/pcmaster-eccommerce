import React, { Fragment } from "./node_modules/react";
import Grid from "./node_modules/@material-ui/core/Grid";
import TextField from "./node_modules/@material-ui/core/TextField";
import Button from "./node_modules/@material-ui/core/Button";
import { makeStyles } from "./node_modules/@material-ui/core/styles";
import Delete from "./node_modules/@material-ui/icons/Delete";
const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: "100%"
    }
}));
const DescriptionItem = ({ value, idx, set, remove }) => {
    const classes = useStyles();
    const [item, setItem] = React.useState(value);
    const onChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value });
        set(idx, { ...item, [e.target.name]: e.target.value });
    };
    const { title, content } = item;
    return (
        <Fragment>
            <Grid item xs={5}>
                <TextField
                    required
                    fullWidth
                    label="Title"
                    name="title"
                    className={classes.textField}
                    value={title}
                    onChange={onChange}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    label="Content"
                    name="content"
                    multiline={true}
                    className={classes.textField}
                    value={content}
                    onChange={onChange}
                />
            </Grid>
            <Grid item xs={1}>
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={() => remove(idx)}
                >
                    <Delete />
                </Button>
            </Grid>
        </Fragment>
    );
};

export default DescriptionItem;
