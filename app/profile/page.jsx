'use client';

import {useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation';

import Profile from '@components/Profile';


const MyProfile = () => {
    const {data: session} = useSession();

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        };
    
        fetchPosts();
      }, []);

    const handlerEdit = async () => {

    }

    const handlerDelete = async () => {

    }

  return (
    <Profile 
    name="My"
    desc="Welcome to your personalized profile page"
    data={[]}
    handlerEdit={handlerEdit}
    handlerDelete={handlerDelete}

    />
  )
}

export default MyProfile