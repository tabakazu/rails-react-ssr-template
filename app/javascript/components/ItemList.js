import React from 'react';

function ItemList(props) {
  const { items } = props;

  return (
    <>
      <h1>Items</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th colSpan="3"></th>
          </tr>
        </thead>

        <tbody>
          { items.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td><a href={`/items/${item.id}`}>Show</a></td>
                <td><a href={`/items/${item.id}/edit`}>Edit</a></td>
                <td><a href={`/items/${item.id}`} data-confirm="Are you sure?" rel="nofollow" data-method="delete">Destroy</a></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <br />

      <a href={'/items/new'}>New Item</a>
    </>
  );
}

export default ItemList
