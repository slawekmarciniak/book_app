import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { addNewBook } from "../../api/FakeBookApi";
import { useHistory } from "react-router-dom";
import "./addBook.css";

const AddBook = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formInputsName = ["Title", "Author", "Publishing_House", "Pages"];

  const onSubmit = (data) => {
    addNewBook(data);
    reset();
    history.push("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {formInputsName.map((value) => {
        return (
          <>
            <TextField
              id="outlined-basic"
              label={value}
              variant="outlined"
              placeholder={value}
              {...register(value, { required: true })}
            />
            {errors.title && <span>This field is required</span>}
          </>
        );
      })}
      {errors.title && <span>This field is required</span>}
      <Button type="submit" style={{ marginTop: 30 }} variant="contained">
        submit
      </Button>
    </form>
  );
};
export default AddBook;
