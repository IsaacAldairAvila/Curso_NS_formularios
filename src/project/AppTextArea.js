import { useState } from 'react';
const AppTextArea = () => {
  const [value, setValue] = useState({
    normal: '',
    texto: '',
  });

  const handleChange = (e) =>{
    setValue({...value, [e.target.name]: e.target.value})
  }
  console.log(value)
  return (
    <div>
      <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
      <textarea name='texto' value={value.texto} onChange={handleChange}/>
    </div>
  )
}

export default AppTextArea;
