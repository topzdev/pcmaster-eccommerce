import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        marginLeft: "auto"
    },
    input: {
        flex: 1,
        width: "300px",
        marginLeft: "auto"
    },
    select: {
        width: "200px"
    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    const [category, setCategory] = useState("name");

    const onSelect = e => {
        setCategory(e.target.value);
    };

    return (
        <div className={classes.root}>
            <TextField
                id="standard-required"
                label={`Search Product ${_.capitalize(category)}`}
                className={classes.input}
            />
            <IconButton aria-label="delete" className={classes.margin}>
                <SearchIcon />
            </IconButton>

            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Search Filters"
                onChange={onSelect}
                className={classes.select}
            >
                <MenuItem value={"name"}>Product Name</MenuItem>
                <MenuItem value={"barcode"}>Barcode</MenuItem>
                <MenuItem value={"sku"}>SKU</MenuItem>
            </Select>
        </div>
    );
}
