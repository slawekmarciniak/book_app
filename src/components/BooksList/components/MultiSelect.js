import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import "./multiselect.css";

const MultiSelect = () => {
  const { books, selectBooks, filter, setFilter } = useContext(AppContext);

  const handleChange = (event) => {
    setFilter(event.target.value);
    selectBooks(event.target.value);
  };

  return (
    <div className="select_form">
      {books && (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select">filter by</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={filter}
              label="book_filter"
              onChange={handleChange}
            >
              {books.map((e) => (
                <MenuItem key={e.id} value={e.publishingHouse}>
                  {e.publishingHouse}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    </div>
  );
};

export default MultiSelect;
