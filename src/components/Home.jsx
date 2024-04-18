import React from 'react';
import appFirebase from '../credenciales'; // Assuming this is the path to your Firebase credentials
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
  return (
    <div>
      <h2 className='text-center'>Bienvenido usuario {correoUsuario} <button className='btn btn-primary' onClick={()=>signOut(auth)}>logout</button> </h2>
    </div>
  );
};

export default Home;