import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'Twilight']);

    const onAddCategory= ( newCategory )=>{

      if( categories.includes(newCategory)) return;
      setCategories( cat => [newCategory,...categories]);
      
    };

  return (
    <> 
        <h1>GiftExpertApp</h1>

      <AddCategory 
      onNewCategory={ (event) => onAddCategory(event)}
      />

          {categories.map( category => 
                (
                <GiftGrid 
                key={category} 
                category = {category}/>
            ))
          } 


    </>
  )
}
