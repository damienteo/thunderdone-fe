import * as React from "react";

import PokemonCard from "./common/PokemonCard";

import { IProduct } from "../../interfaces/IProduct";
import useWeb3Transactions from "../../utils/hooks/useWeb3Transactions";

const ListingCard: React.FunctionComponent<IProduct> = (props) => {
  const { name, description, tokenId, owner } = props;

  const { listOnMarketPlace } = useWeb3Transactions();

  const handleClick = () => {
    if (tokenId !== undefined) listOnMarketPlace(tokenId, description, name);
  };

  const disabled = false;

  return (
    <PokemonCard
      disabled={disabled}
      buttonText="list"
      handleClick={handleClick}
      {...props}
    />
  );
};

export default ListingCard;
