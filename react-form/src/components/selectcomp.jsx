import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  container: {
    marginTop: "10%",
  },
  formControl: {
    minWidth: 120,
  },
  label: {
    color: "darkred",
    "&.Mui-focused": {
      color: "darkred",
    },
  },
  select: {
    "&:after": {
      borderBottomColor: "darkred",
    },
    "& .MuiSvgIcon-root": {
      color: "darkred",
    },
  },
});

const SelectComp = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h5">Custom Select</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select" className={classes.label}>
          Age
        </InputLabel>
        <Select
          labelId="simple-select"
          id="demo-simple-select"
          className={classes.select}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default SelectComp;
