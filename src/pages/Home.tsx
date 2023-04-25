import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Box>hello</Box>
      <Button onClick={() => navigate("/dashboard")}>Goto Dashboard</Button>
      <Button ml="10px" onClick={() => navigate("/sign-up")}>
        Goto SignUp
      </Button>
      <Button ml="10px" onClick={() => navigate("/login")}>
        Goto Sign in
      </Button>
       <Button ml="10px" onClick={() => navigate("/reset-password")}>
        Goto reset passwrd
      </Button>
      <Button ml="10px" onClick={() => navigate("/verify")}>
        verify
      </Button>
    </>
  );
}

export default Home;
