import {
  faChevronRight,
  faSpinnerThird,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "src/components/content/Button";

interface SubmitProps {
  isLoading: boolean;
  disabled: boolean;
  label: string;
}

const Submit = ({ isLoading, disabled, label }: SubmitProps) => {
  return (
    <Button type="submit" loading={isLoading} disabled={disabled}>
      {label}{" "}
      {!isLoading ? (
        <FontAwesomeIcon icon={faChevronRight} fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faSpinnerThird} spin fixedWidth />
      )}
    </Button>
  );
};

export default Submit;
