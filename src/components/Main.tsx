import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import * as Yup from 'yup';
import { Button, Checkbox } from 'antd';
import { toast } from 'react-toastify';
import { useLogin } from '../helpers/POST/useLogin';

const Main = () => {
  const requestLogin = useLogin({
    onSuccess(response) {
      console.log(response);
      if (response) {
        toast.success('🦄 Login Success!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('🦄Login Failed!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    onError(res) {
      console.log(res);
      toast.error('🦄 Wow so easy!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  return (
    <div className="main__container">
      <div className="form_container">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={({ email, password }) => {
            // console.log(values);
            requestLogin.mutateAsync({ email, password });
          }}
        >
          {({ errors, touched }) => (
            <Form className="form " autoComplete="off">
              <div className="form__heading">
                <h1 className="form__heading_h1">Welcome Back</h1>
                <h6 className="form__submit_options__h6">
                  Sub-Title text goes here
                </h6>
              </div>
              <Input
                name="email"
                type="email"
                className=" "
                placeholder="Bank Account Number"
                autoComplete="off"
              />

              <Input
                name="password"
                type="text"
                className=""
                placeholder="Bank Account Name"
                autoComplete="off"
              />

              <Button htmlType="submit" className="form__loginButton">
                Login
              </Button>
              <div className="form__submit_options">
                <Checkbox className="form__checkbox">
                  Checkbox
                </Checkbox>
                <h6 className="form__submit_options__h6">
                  Forgot Password
                </h6>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="main__image"></div>
    </div>
  );
};

export default Main;
