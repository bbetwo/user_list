import { useDispatch, useSelector } from "react-redux"
import style from "./UserProfile.module.css"
import { useCallback, useEffect, useState } from "react"

export const UserProfile = () => {

  const selectUserFind = useSelector(state => state.userFind)
  const [formEdit, setFormEdit]= useState({
    name: '',
    jobTitle: '',
    departament: '',
    company: '',
  })
  const dispatch = useDispatch();
  // const { formUser, setFormUser } = useState({
    // name: null,
    // jobTitle: null,
    // departament: null,
    // company: null,
  // })
console.log(selectUserFind.name,'sss');

  useEffect(()=>{
      setFormEdit(selectUserFind)
    
  },[selectUserFind])
  

  const handleChangeField = useCallback((e, field) => {
    console.log(e,'tt');
    
    setFormEdit(()=>{
      return{
      ...formEdit,
      [field]: e.target.value
    }})
  },[])

  const handleSubmitField = useCallback((e) => {
    console.log('sssdsdsadasd');
    
    e.preventDefault();
    dispatch({type: 'USER-EDIT', payload: formEdit})
  },[dispatch, formEdit])

  return (
    <>
      {Object.keys(selectUserFind).length > 0 && <form onSubmit={(e) => handleSubmitField(e)}  className={style.userListWrraper}>
        <div className={style.userName}><span>{formEdit.name}</span></div>
        <div className={style.userList}>
          
          <div className={style.userItem}>
            <div className="user-title">Имя</div>
            <input className={style.userDiscription} value={formEdit.name} />
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
        <button  className={style.listButt} type="submit">Сохранить</button>
      </form>}

    </>)
}