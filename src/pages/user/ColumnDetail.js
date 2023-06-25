import { Link } from "react-router-dom";
import ButtonSmallComponent from "../../components/ButtonSmallComponent";

const ColumnDetail = ({ id }) => {
  return (
    <Link to={`${id}`}>
      <ButtonSmallComponent
        className='buttons buttons-primary'
        label={"View"}
      />
    </Link>
  );
};

export default ColumnDetail;
