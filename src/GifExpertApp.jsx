import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  return(
    <div>
      <h2>Gif Expert App</h2>
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