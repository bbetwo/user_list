export const FormField = ({
    title, job ,onChange, style
}) => {

    console.log(job,'gde ti s');
    
    return (
        <div className={style.userItem}>
            <div className="user-title">{title}</div>
            <input className={style.userDiscription} value={job || ''} onChange={(e) => onChange(e, "jobTitle")} />
        </div>
    )
}