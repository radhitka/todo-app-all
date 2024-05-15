function Textarea(params) {
  const className = params.className ?? '';
  const onChange = params.onChange;
  const required = params?.required ?? false;

  return (
    <div className="form-control w-full">
      {params.title != '' && (
        <div className="label">
          <span className="label-text text-base">{params.title}</span>
        </div>
      )}
      <textarea
        name={params?.name}
        className={`textarea textarea-primary textarea-bordered h-24 ${className}`}
        placeholder={params.placeholder}
        onChange={onChange}
        value={params?.value}
        required={required}
      ></textarea>
    </div>
  );
}

export default Textarea;
