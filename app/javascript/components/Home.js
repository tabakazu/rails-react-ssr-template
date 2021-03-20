import React from 'react';

const Home = (props) => {
  const { session } = props;
  const loginUser = session.user;
  console.log(loginUser)

  return (
    <>
      { loginUser ? (
        <div>
          Logged In <strong>{loginUser.family_name}</strong><br />
          <a href={'/logout'} data-confirm="Are you sure?" rel="nofollow" data-method="delete">Logout</a>
        </div>
      ) : (
        <a href={'/login'}>Login</a>
      ) }
    </>
  );
}

export default Home
