import React from 'react';
import { useForm } from 'react-hook-form';
import Flash from '../flash';

function ItemNew() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = async (data) => {
    const token = document.querySelector("meta[name=csrf-token]").content;
    await fetch('/items.json', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'X-CSRF-Token': token, 'Content-Type': 'application/json' },
      redirect: 'follow',
      body: JSON.stringify({ item: { title: data.title, body: data.body }}),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response.statusText;
    })
    .then(data => {
      Flash.set({ notice: '作成しました。' });
      Turbolinks.visit(`/items/${data.id}`); 
    })
    .catch((error) => {
      Flash.set({ alert: error });
      Flash.show();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label>Title</label>
        <input name="title" ref={register} />
      </div>

      <div className="field">
        <label>Body</label>
        <input name="body" ref={register({ required: true })} />
        {errors.body && 'body is required.'}
      </div>

      <div className="actions">
        <input type="submit" />
      </div>
    </form>
  );
}

export default ItemNew
