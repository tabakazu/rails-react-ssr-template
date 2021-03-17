import React from 'react';

function ItemShow(props) {
  const { item } = props;

  return (
    <>
      <p>
        <strong>Title:</strong>
        {item.title}
      </p>

      <p>
        <strong>Body:</strong>
        {item.body}
      </p>

      <a href={`/items/${item.id}/edit`}>Edit</a>|
      <a href={'/items'}>Back</a>
    </>
  );
}

export default ItemShow
