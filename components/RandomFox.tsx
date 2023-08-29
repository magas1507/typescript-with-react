import { useRef } from "react"

type Props = { image: string}

export const RandomFox = ({image}: Props): JSX.Element =>{
  
	const node = useRef<HTMLImageElement>(null)
  
	return <img ref={node} width={320} height="auto" src={image} className="roundedBorder"/>
}

