interface FieldTypes {
  title: string;
  job: string;
  onChange: (value: string, field:string)=> void;
  style: {
    [key:string]: string;
  };
  field: string;
}

export const FormField = ({ title, job, onChange, style, field }:FieldTypes) => {
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
