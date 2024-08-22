import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { Formik, Field, Form,useFormik, validateYupSchema } from 'formik';
import calculatorSchema from './validation';
import { NavLink } from 'react-router-dom';

function BMIhesapla() {
  const [bmıEntry,setBMIEntry]=useState([])

  useEffect(()=>{
  const storedEntries = JSON.parse(localStorage.getItem('bmiEntries'))
  setBMIEntry(storedEntries)
},[])


//Silme butonu
const HandleRemove=(id)=>{
const updateItems=bmıEntry.filter((value,index)=>index!==id)
setBMIEntry(updateItems);
localStorage.setItem('bmiEntries', JSON.stringify(updateItems));
}

const {handleSubmit,handleChange,handleBlur,values,errors,touched}=useFormik({
  initialValues:{
    kilogram: localStorage.getItem('kilogram') || '',
    Boy: localStorage.getItem('Boy') || '',
  },
  validationSchema:calculatorSchema,
   onSubmit:values=>{
    //BMI Hesaplama
      const kilogramValue = parseInt(values.kilogram, 10) || 0;
      const heightValue = parseInt(values.Boy, 10) || 0;
      const heightInMeters = heightValue / 100;
      const bmi = heightValue > 0 ? kilogramValue / (heightInMeters * heightInMeters) : 0;
//Yeni değerleri alma
      const newEntry = {
        kilogram: values.kilogram,
        Boy: values.Boy,
        BMI: bmi.toFixed(2),
      };
const updatedEntries=[...bmıEntry,newEntry]
  setBMIEntry(updatedEntries)//değerleri kaydetme
  localStorage.setItem('bmiEntries', JSON.stringify(updatedEntries));
//local storage a ekleme
localStorage.setItem('kilogram', values.kilogram);
localStorage.setItem('Boy', values.Boy);

    }
    })

  return (
    <div className='form-container'>
<form className="form" onSubmit={handleSubmit}>
<label htmlFor='kilogram'>Kilogram
<input
name='kilogram' 
value={values.kilogram}
onChange={handleChange}
onBlur={handleBlur}
/>
{
  errors.kilogram && touched.kilogram && <div className='error'>{errors.kilogram}</div> 
}

</label>
<br></br>
<br></br>
<label htmlFor='Boy'>Boy
<input
name='Boy' 
value={values.Boy}
onChange={handleChange}
onBlur={handleBlur}
/>
{
  errors.Boy && touched.Boy && <div className='error'>{errors.Boy}</div> 
}

</label>
<br></br>
<br></br>

<div>
  <button className='btn' type='submit' >Hesapla
  </button ></div>

  <br></br>

</form>
<br></br>

<div className='sonuc'>
<span>
  <b>
    
    {bmıEntry.length > 0 && `BMI: ${bmıEntry[bmıEntry.length - 1].BMI} kg/m² olarak ölçülmüştür.`} 
  
 
    
    </b>
  </span>
  </div>

<h3>BMI Günlüğü</h3>
  <table className="bmi-table">
    <thead>
      <tr>
        <th>Kilogram</th>
        <th>Boy (cm)</th>
        <th>BMI</th>
        <th>Sonuc</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
 {bmıEntry.map((entry,index)=><tr key={index}>
 <td>{entry.kilogram}</td>
 <td>{entry.Boy}</td>
 <td>{entry.BMI}</td>
 <td>
  {entry.BMI < 18 ? "Zayıf Kilo" :
   (entry.BMI <= 25 ? "Normal Kilo" :
   (entry.BMI <= 30 ? "Aşırı Kilo" : "Obez"))}
</td>


<td><button className='diyet'><NavLink to={"/Diyetlistesi"}>Diyet Listesi</NavLink></button>
 <button className='sil' onClick={()=>HandleRemove(index)}>Delete</button></td>

     </tr>
 )} 
    </tbody>
  </table>
    </div>
  )
}

export default BMIhesapla
