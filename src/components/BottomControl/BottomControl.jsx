import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const BottomControl = ({ nextPage, prevPage }) => {
  return (
    <div className="controlPage">
      <div className="item">
        <GrFormPrevious size={40} onClick={(e) => prevPage(e)} />
      </div>
      <div className="item">
        <GrFormNext size={40} onClick={(e) => nextPage(e)} />
      </div>
    </div>
  );
};

export default BottomControl;
