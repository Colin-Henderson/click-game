import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import LabradorGallery from "./components/LabradorGallery";
import { Button } from 'reactstrap';
import Nav from "./components/Nav";

const App = () => (
  <Wrapper>
    <Nav></Nav>
    <Title>Touch the Lab, but not twice.</Title>
    {/* <Gallery /> */}
    <LabradorGallery /> 
  </Wrapper>
);

export default App;
