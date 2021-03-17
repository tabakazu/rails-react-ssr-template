import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Flash from '../flash';

function ItemEdit(props) {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const { item } = props;
  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);

  const onSubmit = async (data) => {
    const token = document.querySelector("meta[name=csrf-token]").content;
    await fetch(`/items/${item.id}.json`, {
      method: 'PUT',
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
      Flash.set({ notice: '更新しました。' });
      Turbolinks.visit(`/items/${data.id}`); 
    })
    .catch((error) => {
      Flash.set({ alert: error });
      Flash.show();
    });
  };

  return (
    <>
      <h1>Editing Item</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Title</label>
          <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} ref={register} />
        </div>

        <div className="field">
          <label>Body</label>
          <input name="body" value={body} onChange={(e) => setBody(e.target.value)} ref={register({ required: true })} />
          {errors.body && 'body is required.'}
        </div>

        <div className="actions">
          <input type="submit" />
        </div>
      </form>

      <a href={`/items/${item.id}`}>Show</a>|
      <a href={'/items'}>Back</a>
    </>
  );
}

export default ItemEdit
