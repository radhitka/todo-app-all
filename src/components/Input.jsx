function Input(params) {
  const className = params?.className ?? '';
  const required = params?.required ?? false;

  const onChange = params.onChange;
  return (
    <div className="form-control w-full">
      {params.title != '' && (
        <div className="label">
          <span className="label-text text-base">{params.title}</span>
        </div>
      )}
      <input
        name={params?.name}
        type={params.type}
        placeholder={params.placeholder}
        className={`input input-primary  ${className}`}
        onChange={onChange}
        required={required}
        value={params?.value ?? ''}
      />
    </div>
  );
}

export default Input;
