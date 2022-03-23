import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = ({defaultCategories = []}) => {

  const [categories, setCategories] = useState(defaultCategories)

  return(
    <div>
      <h2>Buscador de Gifs</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      <ol>
        {
          categories.map(x => 
            <GifGrid 
              category={x}
              key={x}  
            />
          )
        }
      </ol>
    </div>
  )
}

export default GifExpertApp