import { useDispatch, useSelector } from "react-redux";
import style from "./UserProfile.module.css";
import { useCallback, useEffect, useState } from "react";

export const UserProfile = () => {
  const [formEdit, setFormEdit] = useState({});

  const selectUserFind = useSelector((state) => state.userFind);
  const dispatch = useDispatch();

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

  const handleChangeField = useCallback((e, field) => {
    setFormEdit((prevUser) => {
      return {
        ...prevUser,
        [field]: e.target.value,
      };
    });
  }, []);

  // const handlerSubmitApi = async () => {
  //     try{
  //       const res = await fetch('http://localhost:3000/users', {
  //         method: 'POST',
  //         headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify({name: formEdit.name})
  //       })

  //       if(!res.ok){
  //         throw new Error("HTTP-ERROR",res.status);
  //       }

  //       const data = await res.json()
  //       console.log("Dannie otpravleni: ", data);

  //     } catch(err) {
  //       console.error(err,'Oshibochka bratishka');
  //     }
  // }

  // const handlerSubmitApi =async () => {
  //   try{
  //     const response = await fetch('http://localhost:3000/users', {
  //       method: 'POST',
  //       headers:{'Content-type': 'application/json'},
  //       body:JSON.stringify({name: formEdit.name})
  //     })
  //     if(!response.ok){
  //       throw new Error('oshibka', response.status)
  //     }
  //     const data = await response.json();
  //   } catch(error){
  //     console.error(error);
  //   };

  // }

  const handlerSubmitApi = async () => {
    try {
      const response = await fetch("http://localhost:3000/user-test", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: formEdit.name,
          time: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  //   const handlerSubmitApi2 = async () => {
  //     try {
  //         const response = await fetch('http://localhost:3000/user-test',{
  //             method: 'POST',
  //             headers: {'Content-type': 'application/json'},
  //             body: JSON.stringify({name:formEdit.name})
  //
  //
  //         })

  //         if(!response.ok){
  //             throw new Error('oshbka', response.status)
  //         }

  //         const data = await response.json();
  //         console.log(data);

  //     } catch(error){
  //         console.error(error);
  //     }
  //   }

  const handleSubmitField = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({ type: "USER-EDIT", payload: formEdit });
      handlerSubmitApi();
    },
    [dispatch, formEdit, handlerSubmitApi]
  );

  return (
    <>
      {Object.keys(selectUserFind).length > 0 && (
        <form
          onSubmit={(e) => handleSubmitField(e)}
          className={style.userListWrraper}
        >
          <div className={style.userName}>
            <span>{formEdit.name}</span>
          </div>
          <div className={style.userList}>
            <div className={style.userItem}>
              <div className="user-title">Имя</div>
              <input
                className={style.userDiscription}
                value={formEdit.name}
                disabled
              />
            </div>
            <div className={style.userItem}>
              <div className="user-title">Отдел</div>
              <input
                className={style.userDiscription}
                value={formEdit.jobTitle}
                onChange={(e) => handleChangeField(e, "jobTitle")}
              />
            </div>
            <div className={style.userItem}>
              <div className="user-title">Компания</div>
              <input
                className={style.userDiscription}
                value={formEdit.departament}
                onChange={(e) => handleChangeField(e, "departament")}
              />
            </div>
            <div className={style.userItem}>
              <div className="user-title">Должность</div>
              <input
                className={style.userDiscription}
                value={formEdit.company}
                onChange={(e) => handleChangeField(e, "company")}
              />
            </div>
          </div>
          <button className={style.listButt} type="submit">
            Сохранить
          </button>
        </form>
      )}
    </>
  );
};
