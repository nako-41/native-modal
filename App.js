import React, { useState } from "react";
import {
  Container,
  Text,
  Heading,
  Center,
  NativeBaseProvider,
  Link,
} from "native-base"
//import Konteyner from "./components/konteyner";

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
         <Container>
      <Heading>
        A component library for the
        <Link mt={4} href="https://nativebase.io">
        <Heading color="emerald.500"> React Ecosystem</Heading>
      </Link>
        
      </Heading>
      <Text mt="3" fontWeight="medium">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </Container>
    </>
  );
   };
             
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <App />
      </Center>
    </NativeBaseProvider>
  );
};