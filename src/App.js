import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";
function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues:{
    email: '',
    password: ''
  },
  onSubmit: values =>{
    console.log('form:', values);
    alert("Login Successful");
  },
  validate: values=> {
    let errors = {};
    if (!values.email) {
      errors.email = 'Field required'} 
      else
    if (!/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i.test(values.email)) {
      errors.email = 'Username should be an email'}
    if (!values.password) errors.password = 'Field required';
    return errors;

  }
});
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="email" className="form-control" id="emailField" type="text" onChange={formik.handleChange} 
        value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'Orange'}}>{formik.
        errors.email}</div>: null}
        <div>Password</div>
        <input name="password" id="pswField" type="text" onChange={formik.handleChange} 
        value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'Orange'}}>{formik.
        errors.password}</div>: null}    
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
