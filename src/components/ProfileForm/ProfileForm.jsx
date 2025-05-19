import { useDispatch, useSelector } from "react-redux";
import { FormField } from "../FormField/FormField";
import style from "../UserProfile/UserProfile.module.css";
import { useState, useEffect, useCallback } from "react";
import { userEdit } from "../../store/actions";

export const ProfileForm = () => {
  const [formEdit, setFormEdit] = useState({});

  const selectUserFind = useSelector((state) => state.userFind);
  const dispatch = useDispatch();
  console.log(selectUserFind);

  useEffect(() => {
    const user = {
      id: selectUserFind?.id || "",
      name: selectUserFind?.name || "",
      jobTitle: selectUserFind?.jobTitle || "",
      departament: selectUserFind?.departament || "",
      company: selectUserFind?.company || "",
    };
    setFormEdit(user);
    console.log("effect srzbotal", user);
  }, [selectUserFind]);

  const handleSubmitApi = async () => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: selectUserFind.name,
        }),
      });
      if (!response.ok) {
        throw new Error("oshibka otpravki");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("sss", error);
    }
  };

  const handleSubmitField = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(userEdit(formEdit));
      handleSubmitApi();
    },

    [dispatch, formEdit, handleSubmitApi]
  );

  const handleChangeField = useCallback((value, field) => {
    setFormEdit((prevUser) => {
      return {
        ...prevUser,
        [field]: value,
      };
    });
  }, []);

  return (
    Object.keys(selectUserFind).length > 0 && (
      <form
        onSubmit={(e) => handleSubmitField(e)}
        className={style.userListWrraper}
      >
        <div className={style.userName}>
          <span>{formEdit.name}</span>
        </div>
        <div className={style.userList}>
          <FormField
            style={style}
            onChange={handleChangeField}
            title={"Имя"}
            job={formEdit.name}
            field={"name"}
          />
          <FormField
            style={style}
            onChange={handleChangeField}
            title={"Отдел"}
            job={formEdit.jobTitle}
            field={"jobTitle"}
          />
          <FormField
            style={style}
            onChange={handleChangeField}
            title={"Компания"}
            job={formEdit.departament}
            field={"departament"}
          />
          <FormField
            style={style}
            onChange={handleChangeField}
            title={"Должность"}
            job={formEdit.company}
            field={"company"}
          />
        </div>
        <button className={style.listButt} type="submit">
          Сохранить
        </button>
      </form>
    )
  );
};
