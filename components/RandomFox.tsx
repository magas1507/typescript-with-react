

type Props = { image: string}

//forma explícita 
export const RandomFox = ({image}: Props): JSX.Element =>{
  
  return <img width={320} height="auto" src={image} className="roundedBorder"/>
}

// Forma implícito (JSX:Element)
// export const RandomFox = () =>{
//   return <img />
// }


/** Usando tipos de React "FunctionComponent"**
import type { FunctionComponente } from "react"
****
const MyComponent: FunctionComponent = () => {
	return (
		<div>
			<h1>Hola!</h1>
		</div>
	)
}*/

/*// Usando tipos de React "FC"**
import type { FC } from "react"
***
const MyComponent: FC = () => {
	return (
		<div>
			<h1>Hola!</h1>
		</div>
	)
}
*/
