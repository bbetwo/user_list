export const FormField = ({ title, job, onChange, style, field }) => {
  return (
    <div className={style.userItem}>
      <div className="user-title">{title}</div>
      <input
        className={style.userDiscription}
        value={job || ""}
        onChange={(e) => onChange(e.target.value, field)}
      />
    </div>
  );
};
