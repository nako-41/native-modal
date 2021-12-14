import React from "react";
import { Button, Modal } from "native-base";
import { useState } from "react";

const windowHeight = Dimensions.get("window").height;
export const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content height={windowHeight} maxHeight={windowHeight}>
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>full screen modal</Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>LEARN MORE</Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                ACCEPT
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};