import { useDispatch, useSelector } from "react-redux";
import { FormField } from "../FormField/FormField"
import style from "../UserProfile/UserProfile.module.css"
import { useState, useEffect, useCallback } from "react";

export const ProfileForm = () => {
    const [formEdit, setFormEdit] = useState({})

    const selectUserFind = useSelector(state => state.userFind)
    const dispatch = useDispatch();
    console.log(selectUserFind);
    
    useEffect(() => {
        const user = {
            id: selectUserFind?.id || '',
            name: selectUserFind?.name || '',
            jobTitle: selectUserFind?.jobTitle || '',
            departament: selectUserFind?.departament || '',
            company: selectUserFind?.company || ''
        }
        setFormEdit(user)
        console.log('effect srzbotal', user);

    }, [selectUserFind])

    const handleSubmitField = useCallback((e) => {
        e.preventDefault();

        dispatch({ type: 'USER-EDIT', payload: formEdit })
        // handlerSubmitApi();

    }, [dispatch, formEdit])

    const handleChangeField = useCallback((e, field) => {
        setFormEdit((prevUser) => {
            return {
                ...prevUser,
                [field]: e.target.value
            }
        })
    }, [])

    return (
        <form onSubmit={(e) => handleSubmitField(e)} className={style.userListWrraper}>
            <div className={style.userName}><span>{formEdit.name}</span></div>
            <div className={style.userList}>
                <FormField style={style} onChange={handleChangeField} title={'Имя'} job={formEdit.name} />
                <FormField style={style} onChange={handleChangeField} title={'Отдел'} job={formEdit.jobTitle} />
                <FormField style={style} onChange={handleChangeField} title={'Компания'} job={formEdit.departament} />
                <FormField style={style} onChange={handleChangeField} title={'Должность'} job={formEdit.company} />
            </div>
        </form>
    )
}