import React from 'react';
import { object, string, number } from 'yup'; 

const calculatorSchema = object({
  kilogram: number()
    .typeError("Sadece sayısal değer giriniz.")
    .required("Boş bırakılamaz"),
  Boy: number()
    .typeError("Sadece sayısal değer giriniz.")
    .required("Boş bırakılamaz")
});

export default calculatorSchema;
