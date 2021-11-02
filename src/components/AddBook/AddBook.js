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

  const onSubmit = (data) => {
    addNewBook(data);
    reset();
    history.push("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        placeholder="title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}

      <TextField
        id="outlined-basic"
        label="author"
        variant="outlined"
        placeholder="author"
        {...register("author", { required: true })}
      />
      {errors.author && <span>This field is required</span>}

      <TextField
        id="outlined-basic"
        label="publishingHouse"
        variant="outlined"
        placeholder="publishingHouse"
        {...register("publishingHouse", { required: true })}
      />
      {errors.publishingHouse && <span>This field is required</span>}

      <TextField
        id="outlined-basic"
        label="pages"
        variant="outlined"
        placeholder="pages"
        {...register("pages", { required: true })}
      />
      {errors.pages && <span>This field is required</span>}
      <Button
        type="submit"
        style={{ marginTop: 30 }}
        // onClick={handleClick}
        variant="contained"
      >
        submit
      </Button>
      {/* 
      <input type="submit" /> */}
    </form>
  );
};
export default AddBook;
