// Essentials
import { useState } from "react";

// styles
import { Wrapper } from "./Loader.styles";

interface IAppProps {}

const Loader: React.FunctionComponent<IAppProps> = (props) => {
    
  return (
    <Wrapper>
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </Wrapper>
  );
};

export default Loader;
