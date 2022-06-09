import { Button, CircularProgress, Typography } from "@mui/material";

import { Box } from "@mui/system";
// import { CircularProgress } from "material-ui";

import React from "react";
import { useNavigate } from "react-router-dom";
import SelectField from "../component/SelectField";
import TextFieldcomp from "../component/TextFieldcomp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  // console.log(response);
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />

      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <TextFieldcomp />
      <Box mt={3} width="100%">
        <Button
          fullWidth
          type="submit"
          variant="contained"
          className="btn"
          style={{
            borderRadius: 35,
            backgroundColor: "green",
            fontSize: "18px",
          }}
        >
          Get Started
        </Button>
      </Box>
    </form>
  );
};
export default Settings;
