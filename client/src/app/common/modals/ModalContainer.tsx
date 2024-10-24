import { observer } from "mobx-react-lite";
import { Modal } from "semantic-ui-react";
import { useStore } from "../../stores/store";

const modalStyles = {
  background: "#fff",
  padding: "25px",
  borderRadius: "25px",
  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
  width: "40%"
};

function ModalContainer() {
  const { modalStore } = useStore();

  return (
    <Modal
      open={modalStore.modal.open}
      onClose={modalStore.closeModal}
      size="mini"
      dimmer="blurring"
      style={modalStyles}
    >
      <Modal.Content>{modalStore.modal.body}</Modal.Content>
    </Modal>
  );
}

const ObservedModalContainer = observer(ModalContainer);
export default ObservedModalContainer;
