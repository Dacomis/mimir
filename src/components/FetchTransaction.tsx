import React, { useState } from "react";
import axios from "axios";

import BASE_URL from "../utils/apiConfig";
import StyledInput from "../customComponents/StyledInput";
import StyledButton from "../customComponents/StyledButton";
import Grid from "@mui/material/Grid/Grid";

const FetchTransaction: React.FC = () => {
  const [input, setInput] = useState("");

  const createRequestConfig = (input: string) => {
    return {
      method: "get",
      url: `${BASE_URL}/${input}`,
      maxBodyLength: Infinity,
      headers: {
        Accept: "application/json",
        "api-key": process.env.REACT_APP_API_KEY,
      },
    };
  };

  const fetchTransaction = async (config: any) => {
    try {
      const response = await axios(config);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    const config = createRequestConfig(input);
    fetchTransaction(config);
  };

  return (
    <Grid>
      <StyledInput
        label="API Key"
        value={input}
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <StyledButton variant="contained" color="primary" onClick={handleClick}>
        Fetch Transaction
      </StyledButton>
    </Grid>
  );
};

export default FetchTransaction;
