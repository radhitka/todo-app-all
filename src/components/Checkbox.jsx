function Checkbox(params) {
  const className = params?.className ?? '';
  const onChange = params.onChange;
  return (
    <div className="form-control flex-row gap-2">
      <input
        id="check"
        type="checkbox"
        checked={params.checked}
        className={`checkbox checkbox-primary ${className}`}
        onChange={onChange}
      />
      <label className=" cursor-pointer" htmlFor="check">
        {params.title != '' && (
          <span className="label-text text-base">{params.title}</span>
        )}
      </label>
    </div>
  );
}

export default Checkbox;
