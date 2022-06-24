import { useState } from 'react';
const AppSelect = () => {
  const [value, setValue] = useState({
    normal: '',
    texto: '',
    select: ''
  });

  const handleChange = (e) =>{
    setValue({...value, [e.target.name]: e.target.value})
  }
  console.log(value)
  return (
    <div>
      <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
      <textarea name='texto' value={value.texto} onChange={handleChange}/>
      <select value={value.select} name="select" onChange={handleChange}>
        <option value='' >-- Seleccione --</option>
        <option value='feliz' >-- feliz --</option>
        <option value='triste' >-- tristeS --</option>
        <option value='enojado' >-- enojadoS --</option>
        <option value='amoroso' >-- amorosoS --</option>
      </select>
    </div>
  )
}

export default AppSelect;
