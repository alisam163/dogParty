import { useDispatch, useSelector } from "react-redux";
import { FcDislike } from "react-icons/fc";
import { removeFavorite } from "../redux/slices/favoritesSlice";

const Favorites = () => {
  const favorite = useSelector((state) => state.favorite.value);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(removeFavorite(item));
  };

  return (
    <div className="favorites-list">
      {favorite.map((item) => {
        return (
          <div className="favorite_item" key={item}>
            <img src={item} alt="fav" className="favorite_item_picture" />
            <FcDislike
              size={40}
              className="favorite_item_delete"
              onClick={() => handleDelete(item)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
