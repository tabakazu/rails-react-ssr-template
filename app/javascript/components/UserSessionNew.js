import React from 'react';
import { useForm } from 'react-hook-form';
import Flash from '../flash';

const UserSessionNew = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = async (data) => {
    const token = document.querySelector("meta[name=csrf-token]").content;
    await fetch('/user_database_authentications/sign_in.json', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'X-CSRF-Token': token, 'Content-Type': 'application/json' },
      redirect: 'follow',
      body: JSON.stringify({ user_database_authentication: { email: data.email, password: data.password, remember_me: data.remember_me }}),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response.statusText;
    })
    .then(data => {
      Flash.set({ notice: 'ログインしました。' });
      Turbolinks.visit(`/`); 
    })
    .catch((error) => {
      Flash.set({ alert: error });
      Flash.clear();
      Flash.show();
    });
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Email</label>
          <input name="email" autoComplete="email" autoFocus ref={register({ required: true })} />
          {errors.body && 'email is required.'}
        </div>

        <div className="field">
          <label>Password</label>
          <input type="password" name="password" autoComplete="current-password" ref={register({ required: true })} />
          {errors.body && 'password is required.'}
        </div>

        <div className="field">
          <input type="checkbox" name="remember_me" ref={register} />
          <label>Remember Me</label>
        </div>

        <div className="actions">
          <input type="submit" />
        </div>
      </form>

      <a href={'/items'}>Back</a>
    </>
  );
}

export default UserSessionNew
