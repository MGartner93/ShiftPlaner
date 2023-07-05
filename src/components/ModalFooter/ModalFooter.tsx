import { Button } from "@mantine/core";
import "./modalFooter.scss";

interface IModalFooterProps {
  onSave: () => void;
  loading?: boolean;
  saveDisabled?: boolean;
  saveLabel?: string;
  onDismiss?: () => void;
  dismissLabel?: string;
}

export const ModalFooter = (props: IModalFooterProps) => {
  return (
    <div className="modal-footer-container">
      <Button
        loading={props.loading}
        color={props.dismissLabel === "Löschen" ? "red" : "gray"}
        onClick={props.onDismiss}
      >
        {props.dismissLabel ?? "Verwerfen"}
      </Button>
      <Button
        onClick={props.onSave}
        disabled={props.saveDisabled}
        loading={props.loading}
      >
        {props.saveLabel ?? "Speichern"}
      </Button>
    </div>
  );
};
