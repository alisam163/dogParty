import { useEffect, useState } from "react";
import { getRandomDog } from "../../api/apiDog";
import BottomControl from "../BottomControl/BottomControl";
import { FcLike } from "react-icons/fc";
import { setDog, incCurrent, decCurrent } from "../../redux/slices/dogSlice";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../../redux/slices/favoritesSlice";

const ControlDog = () => {
  const dog = useSelector((state) => state.dog.value);
  const [loading, setLoading] = useState(false);
  const current = useSelector((state) => state.dog.current);
  const dispatch = useDispatch();
  const dogLength = dog.length;

  const toogleFavorites = () => {
    console.log("Избранное", dog[current - 1]);
    dispatch(addFavorites(dog[current - 1]));
  };

  const nextPage = () => {
    dispatch(incCurrent(current + 1));
  };

  const prevPage = () => {
    if (current <= 1) {
      return false;
    }
    dispatch(decCurrent(current - 1));
    console.log(current);
  };

  const getDog = () => {
    const res = getRandomDog();
    res
      .then((res) => {
        dispatch(setDog(res.data.message));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    getDog();
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (current > dogLength) {
      getDog();
    }
    setLoading(false);
  }, [current]);

  return (
    <div className="window">
      {loading ? (
        <b className="loading">Loading...</b>
      ) : (
        <img src={dog[current - 1]} alt="собачка ^_^" className="picture" />
      )}
      <BottomControl
        nextPage={nextPage}
        prevPage={prevPage}
        current={current}
      />
      <div className="favorites-add">
        <FcLike size={30} onClick={() => toogleFavorites()} />
      </div>
    </div>
  );
};

export default ControlDog;
