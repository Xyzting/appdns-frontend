import React, { useEffect, useState } from "react";

// Mui Component
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";

// Mui Icon
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

interface Props {
  option: {
    label: string;
    value: any;
  }[];
  handleSubmit: any;
}

export default function MultipleFilter(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const [value, setVal] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(Number);

  const [searchField, setSearchField] = useState([
    {
      searchBy: "",
      searchVal: "",
    },
  ]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleAdd() {
    const data = [...searchField];

    data.push({
      searchBy: "",
      searchVal: "",
    });

    setSearchField(data);
  }

  function handleRemove(i: any) {
    if (searchField.length === 1) {
      return setSearchField([{
        searchBy: "",
        searchVal: "",
      }]);
    }
    const data = [...searchField];
    data.splice(i, 1);

    setSearchField(data);
  }

  function handleChange(index: any, event: any) {
    const values = [...searchField];
    if (event.target.name === "searchBy") {
      values[index].searchBy = event.target.value;

      if(event.target.value === "status"){
        setVal([])
      }else if(event.target.value === "tags"){
        setTags([]);
      }else {
        values[index].searchBy = event.target.value
        values[index].searchVal = "" 
      }
    }

    if (event.target.name === "searchVal") {
      if(values[index].searchBy === "status"){
        values[index].searchVal = event.target.value.join(',');
      }else {
        values[index].searchVal = event.target.value;
      }
    }

    setSearchField(values);
  }

  function tagsField(index: any){
    setIndex(index)
  }
  
  function onSubmit() {
    props.handleSubmit(searchField);
    handleClose();
  }

  useEffect(() => {
    if(tags.length > 0){
      const values = [...searchField];
      
      values[index].searchBy = "tags";
      values[index].searchVal = tags.join(',');
  
      setSearchField(values);
    }
  }, [tags])

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        variant="contained"
        color="info"
        startIcon={<FilterListRoundedIcon fontSize="small" />}
        sx={{ borderRadius: 2, mr: 1, textTransform: "capitalize" }}
        onClick={handleClick}
      >
        Filters
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ mt: 1, ml: -1 }}
      >
        <Grid
          container
          spacing={1}
          sx={{ width: 550, p: 2 }}
          justifyContent="center"
        >
          <Grid item xs={12} sx={{ mb: 1 }}>
            <Typography>Filter Data</Typography>
          </Grid>
          {searchField.map((item, index) => {
            return (
              <Grid container item xs={12} spacing={1} key={index}>
                <Grid
                  container
                  item
                  alignItems="center"
                  spacing={1}
                  key={index}
                >
                  <Grid item xs={5}>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        size="small"
                        name="searchBy"
                        value={item.searchBy}
                        onChange={(data) => {handleChange(index, data), tagsField(index)}}
                      >
                        <MenuItem value="" disabled={true}>
                          <em>Search By</em>
                        </MenuItem>
                        {props.option.map((item: any) => {
                          return (
                            <MenuItem value={item.value} key={item.value} >
                              {item.label}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {item.searchBy === "status" ? (
                      <FormControl
                        fullWidth
                      >
                        <Select
                          displayEmpty
                          name="searchVal"
                          size="small"
                          multiple
                          value={value}
                          input={<OutlinedInput/>}
                          renderValue={(selected) => {
                            if(selected.length === 0){
                              return <em>Pilih Status</em>
                            }
                            return (
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                  <Chip key={value} label={value} size="small"/>
                                ))}
                              </Box>
                              )
                          }}
                          onChange={(e) => {
                            handleChange(index, e),
                            setVal(
                              typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
                            );
                          }} 
                        >
                          <MenuItem key="progress" value="progress">
                            Progress
                          </MenuItem>
                          <MenuItem key="ready" value="ready">
                            Ready
                          </MenuItem>
                          <MenuItem key="closed" value="closed">
                            Closed
                          </MenuItem>
                          <MenuItem key="hold" value="hold">
                            Hold
                          </MenuItem>
                        </Select>
                      </FormControl>
                    ) : item.searchBy === "tags" ? (
                      <Autocomplete
                        multiple
                        fullWidth
                        size="small"
                        options={[]}
                        freeSolo
                        value={tags}
                        onChange={(e, newval, reason) => {
                          tagsField(index),
                          setTags(newval);
                        }}
                        clearOnBlur
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    ) : (
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        name="searchVal"
                        type={item.searchBy === "created_at" ? "date" : "text"}
                        value={item.searchVal}
                        onChange={(data) => handleChange(index, data)}
                        placeholder="Search"
                      />
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <IconButton onClick={() => handleRemove(index)}>
                      <CancelOutlinedIcon color="error" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
          <Grid container item xs={12} justifyContent="end" sx={{ mt: 1 }}>
            <Grid item xs={2}>
              <Button
                fullWidth
                variant="contained"
                color="info"
                className="btn-main"
                startIcon={<AddCircleOutlineOutlinedIcon color="primary" />}
                onClick={handleAdd}
              >
                New
              </Button>
            </Grid>
            <Grid item xs={2} sx={{ ml: 1 }}>
              <Button
                fullWidth
                variant="contained"
                className="btn-main"
                onClick={onSubmit}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
}
