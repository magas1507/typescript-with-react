import { useState } from 'react';
import { RandomFox } from '@/components/RandomFox';

//generate a random function between 1 and 123
const randomNumber = () => Math.floor(Math.random()*123) + 1;

type ImagenItems = { id: string; url: string};

//generate id
const generateId = () => Math.random().toString(36).substring(2,9)
export default function Home() {
  const [images, setImages] = useState<Array<ImagenItems>>([
    {id:"generateId()",url:`https://randomfox.ca/images/${randomNumber()}.jpg`}
    {id:"generateId()",url:`https://randomfox.ca/images/${randomNumber()}.jpg`}
    {id:"generateId()",url:`https://randomfox.ca/images/${randomNumber()}.jpg`}
    {id:"generateId()",url:`https://randomfox.ca/images/${randomNumber()}.jpg`}
  ])
  return (
    <main>  
      {images.map(({id, url}) => (
        <div className="p-4" key={id}>
          <RandomFox image={url} />
        </div>))
      }    
    </main>
  )
}
