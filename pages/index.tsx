import { useState } from 'react';
import { RandomFox } from '@/components/RandomFox';
import Head from 'next/head';
import type { MouseEventHandler } from 'react';

//generate a random function between 1 and 123
const randomNumber = () => Math.floor(Math.random()*123) + 1;

type ImagenItems = { id: string; url: string};

//generate id
const generateId = () => Math.random().toString(36).substring(2,9)
export default function Home() {
  const [images, setImages] = useState<Array<ImagenItems>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement>=(event) =>{
    const newImageItem ={
      id: generateId(),
      url:`https://randomfox.ca/images/${randomNumber()}.jpg`,
    }

    setImages([
      ...images,
      newImageItem
    ])
  }
  return (
    <main>
      <h1 className='text-3xt font bold underline'>Hi Platzi!!</h1> 
      <button onClick={addNewFox }>add new images fox</button> 
      {images.map(({id, url}) => (
        <div className="p-4" key={id}>
          <RandomFox image={url} />
        </div>))
      }    
    </main>
  )
}
