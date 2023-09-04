import { useState } from 'react';
import { LazyImage } from '@/components/RandomFox';
import Head from 'next/head';
import type { MouseEventHandler } from 'react';
import { NextPage } from 'next';

//generate a random function between 1 and 122
const randomNumber = () => Math.floor(Math.random()*122) + 1;

type ImagenItems = { id: string; url: string};

//generate id
const generateId = (): string => {
  return(
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

type ImageItem = {
  id: string;
  url: string;
};

export default function Home():JSX.Element{
  const [images, setImages] = useState<Array<ImageItem>>([]);

    const addNewFox: MouseEventHandler<HTMLButtonElement> = () =>{   
      const id = generateId();
      const url = `https://randomfox.ca/images/${randomNumber()}.jpg`;
      setImages([...images,{id, url}])
    }

  return (
    <main>
      <h1 className='text-3xt font bold underline'>Hi Platzi!!</h1> 
      <button 
        onClick={addNewFox }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        add new images fox
      </button> 
      {images.map(({id, url}) => (
        <div className="p-4" key={id}>
          <LazyImage
              src={url}
              width="320"
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => {
                console.log("holi!");
              }}
            />
        </div>))
      }    
    </main>
  )
}
