import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import ReactDOM from 'react-dom';

export default class Formk extends React.Component {
  
  handleSubmit = (values, { 
    props = this.props, 
    setSubmitting 
  }) => { 
    console.debug(values);

    //http://localhost:60158/v1/shoppingList
    axios.post('https://0ni5h012ze.execute-api.sa-east-1.amazonaws.com/Prod/v1/shoppingList',
    {
      'Name' : values.first_name,
      'Quantity': values.quantity
    })
      .then((res) => {
        console.log(res);
        //alert(res.data);
      })
      .catch((err) => {
        alert(err);
      })
    
    setSubmitting(false);
    return;
  }
   
  render() {
     
    return(
      <Formik
        initialValues={{
           first_name: '',
           email_address: '',
           quantity: '',
           gender: ''
        }}
        validate={(values) => {
          let errors = [];
      
          if(!values.email)
             errors.email = "Email Address Required";
             //check if my values have errors
             return errors;
        }}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return(
            <Form>
                <Field type="text" name="first_name" placeholder="First Name"/> 
                <ErrorMessage name="first_name" />
                <br/>
                <Field type="text" name="email_address" placeholder="Email address" />
                <ErrorMessage name="email" />
                <br/>
                <Field type="Number" name="quantity" placeholder="Quantity" />
                <ErrorMessage name="quantity" />
                <br/>
                <Field name="gender" component="select" placeholder="Your Gender">   
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                </Field>
		        <ErrorMessage name="gender" />
                <br/>           
                <button type="submit" disabled={formProps.isSubmitting}>Submit Form</button>
              </Form>
           );
        }}
     />);
   }
}

ReactDOM.render(<Formk />, document.getElementById('body'));