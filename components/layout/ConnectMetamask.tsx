import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

import useConnectWallet from "../../utils/hooks/useConnectWallet";

const ConnectMetamask: React.FunctionComponent = () => {
  const { requestConnect } = useConnectWallet();

  const handleClick = () => {
    requestConnect();
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      <Image
        src="/metamask-logo-black-and-white.png"
        alt="me"
        width="28"
        height="28"
      />
      <Typography variant="h6" sx={{ marginLeft: 1 }}>
        Connect Metamask
      </Typography>
    </Button>
  );
};

export default ConnectMetamask;
