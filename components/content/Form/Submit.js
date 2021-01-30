import {
  faChevronRight,
  faSpinnerThird,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/content/Button";

const Submit = (props) => {
  return (
    <Button type="submit" loading={props.isLoading} disabled={props.disabled}>
      {props.label}{" "}
      {!props.isLoading ? (
        <FontAwesomeIcon icon={faChevronRight} fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faSpinnerThird} spin fixedWidth />
      )}
    </Button>
  );
};

export default Submit;
