import React, { CSSProperties } from "react";
import { ProfileTypes } from "../ProfileForm/ProfileForm";

interface UserItemType {
  style: CSSProperties | undefined;
  user: ProfileTypes
  onClick:(u:ProfileTypes)=> void
}

export const UserItem = React.memo(({ style, user, onClick }:UserItemType) => {
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
