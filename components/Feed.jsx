'use client';

import {useState, useEffect} from 'react'

import PromptCard from './PromptCard';

const Feed = () => {
  return (
    <section>
      <form className="relative w-full flex-center">
        <input 
        type="text" 
        placeholder='Search for tag or username'
        value={searchText}
        onChange={handlerSearchChange}
        required
        className='search_input peer'
        />
      </form>
    </section>
  )
}

export default Feed