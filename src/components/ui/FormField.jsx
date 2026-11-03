// Campo de formulário com rótulo e mensagem de erro.
// Props: id, rotulo, erro, multilinha, inputRef + qualquer atributo de <input> (type, name, value, onChange...).
function FormField({ id, rotulo, erro, multilinha = false, inputRef, ...props }) {
  const Elemento = multilinha ? "textarea" : "input";

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[13px] font-bold text-muted">
        {rotulo}
      </label>
      <Elemento
        id={id}
        ref={inputRef}
        className={`field-input ${multilinha ? "resize-y" : ""}`}
        aria-invalid={erro ? "true" : "false"}
        aria-describedby={erro ? `${id}-erro` : undefined}
        {...props}
      />
      {erro && (
        <p id={`${id}-erro`} className="text-[13px] text-red-400">
          {erro}
        </p>
      )}
    </div>
  );
}

export default FormField;
