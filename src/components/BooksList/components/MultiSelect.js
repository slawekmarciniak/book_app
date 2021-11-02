import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
            <InputLabel id="demo-simple-select-label">
              select publishing house
            </InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="books"
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
