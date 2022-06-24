import { useState } from 'react';
const AppCheckbox = () => {
  const [value, setValue] = useState({
    normal: '',
    texto: '',
    select: '',
    check: false
  });

  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]
        : target.type === 'checkbox'
          ? target.checked : target.value
    })
  }
  console.log(value)
  return (
    <div>
      <input type="text" name="normal" value={value.normal} onChange={handleChange} />
      <textarea name='texto' value={value.texto} onChange={handleChange} />
      <select value={value.select} name="select" onChange={handleChange}>
        <option value='' >-- Seleccione --</option>
        <option value='feliz' >-- feliz --</option>
        <option value='triste' >-- tristeS --</option>
        <option value='enojado' >-- enojadoS --</option>
        <option value='amoroso' >-- amorosoS --</option>
      </select>
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
    </div>
  )
}

export default AppCheckbox;
