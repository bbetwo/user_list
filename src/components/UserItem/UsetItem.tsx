import React from "react";
export const UserItem = React.memo(({ style, user, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(user);
      }}
      style={style}
      className="row"
    >
      {user.name}
    </div>
  );
});
