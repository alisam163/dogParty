import Button from "../Button/Button";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const BottomControl = ({ nextPage, prevPage }) => {
  return (
    <div className="controlPage">
      <div className="item">
        <Button>
          <GrFormPrevious size={40} onClick={(e) => prevPage(e)} />
        </Button>
      </div>
      <div className="item">
        <Button>
          <GrFormNext size={40} onClick={(e) => nextPage(e)} />
        </Button>
      </div>
    </div>
  );
};

export default BottomControl;
