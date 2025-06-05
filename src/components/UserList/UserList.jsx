import { useCallback, useEffect } from "react";
import style from "./UserList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FixedSizeList } from "react-window";
import { List } from "react-virtualized";
import { UserItem } from "../UserItem/UsetItem";
import { userData, userFind } from "../../store/actions";

const USER_COUNT = 1000000;

export const UserList = () => {
  const dispatch = useDispatch();
  const selectUser = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(userData(USER_COUNT));
  }, [dispatch]);

  const handlTargetUser = useCallback(
    (user) => {
      dispatch(userFind(user));
    },
    [dispatch]
  );

  const rowItem = useCallback(
    ({ key, index, style }) => {
      console.log("rirender ss");
      return (
        <UserItem
          key={key}
          index={index}
          style={style}
          onClick={handlTargetUser}
          user={selectUser[index]}
        />
      );
    },
    [selectUser, handlTargetUser]
  );

  return (
    <>
      <div className={style.userList}>
        <List
          height={300}
          width={350}
          rowHeight={30}
          rowCount={selectUser.length}
          rowRenderer={rowItem}
          overscanRowCount={100}
        />
      </div>
    </>
  );
};
