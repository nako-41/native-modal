import React, { useState } from "react";
import {
  Container,
  Text,
  Heading,
} from "native-base"
import base from "./components/base";

export const base = () => {
    return (
      <Link mt={4} href="https://nativebase.io">
        Click here to open documentation.
      </Link>
    )
  }
export const base = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
         <Container>
      <Heading>
        A component library for the
        <Heading color="emerald.500"> React Ecosystem</Heading>
      </Heading>
      <Text mt="3" fontWeight="medium">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </Container>
    </>
  );
   };
   export default base;