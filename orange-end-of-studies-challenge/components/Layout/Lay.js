import { Fragment } from 'react';
import {Nav} from "./index";
import SmallWithSocial from "./footer";
import classes  from "./lay.module.css"
import {Container} from "@chakra-ui/react";

function Lay(props) {
  return (
    <Fragment

    >

      <Container h={["10000px","100vh"]} maxW={"container.xlll"} p={0}>
        {props.children}
      </Container>




    </Fragment>
  );
}

export default Lay;
