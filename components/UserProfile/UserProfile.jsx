import { useDispatch, useSelector } from "react-redux"
import style from "./UserProfile.module.css"
import { useCallback, useEffect, useState } from "react"

export const UserProfile = () => {
  const selectUserFind = useSelector(state => state.userFind)
  const dispatch = useDispatch();

  const [formEdit, setFormEdit] = useState({})

  useEffect(() => {
    const user = {
      name: selectUserFind?.name || '',
      jobTitle: selectUserFind?.jobTitle || '',
      departament: selectUserFind?.departament || '',
      company: selectUserFind?.company || ''
    }

    setFormEdit(user)

    console.log('effect srzbotal', user);
    
  }, [selectUserFind])


  const handleChangeField = useCallback((e, field) => {
    setFormEdit((prevUser) => {
      return {
        ...prevUser,
        [field]: e.target.value
      }
    })

  }, [])

  const handlerSubmitApi = async () => {
    
      
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: formEdit.name})
      })
      
   

    const data = await res.json()
    console.log(res.url,'ppc');
    
  }

  const handleSubmitField = useCallback((e) => {
    console.log(formEdit,'alo nahui ss');
    
    e.preventDefault();
    dispatch({ type: 'USER-EDIT', payload: formEdit })
    handlerSubmitApi();

  }, [dispatch, formEdit])

  return (
    <>
      {Object.keys(selectUserFind).length > 0 && <form onSubmit={(e) => handleSubmitField(e)} className={style.userListWrraper}>
        <div className={style.userName}><span>{formEdit.name}</span></div>
        <div className={style.userList}>
          <div className={style.userItem}>
            <div className="user-title">Имя</div>
            <input className={style.userDiscription} value={formEdit.name} disabled />
          </div>
          <div className={style.userItem}>
            <div className="user-title">Отдел</div>
            <input className={style.userDiscription} value={formEdit.jobTitle} onChange={(e) => handleChangeField(e, "jobTitle")} />
          </div>
          <div className={style.userItem}>
            <div className="user-title">Компания</div>
            <input className={style.userDiscription} value={formEdit.departament} onChange={(e) => handleChangeField(e, 'departament')} />
          </div>
          <div className={style.userItem}>
            <div className="user-title">Должность</div>
            <input className={style.userDiscription} value={formEdit.company} onChange={(e) => handleChangeField(e, 'company')} />
          </div>
        </div>
        <button className={style.listButt} type="submit">Сохранить</button>
      </form>}

    </>)
}