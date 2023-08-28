import { useState } from 'react';
import { RandomFox } from '@/components/RandomFox';

//generate a random function between 1 and 123
const randomNumber = () => Math.floor(Math.random()*123) + 1;

export default function Home() {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`
  ])
  return (
    <main>  
      {images.map((image, index) => (
        <div className="p-4" key={index}>
          <RandomFox image={image} />
        </div>))
      }    
    </main>
  )
}
