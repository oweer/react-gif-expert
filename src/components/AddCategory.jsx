import { useState } from "react"


export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Goku')

    const onInputChane = ({target})=>{
     
        setInputValue(target.value)
    }

    const onSubmit= (event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        // setCategories( categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


  return (
    <form onSubmit={ onSubmit }>
         <input 
        type="text"
        placeholder="Buscar gift"
        value={inputValue}
        onChange={onInputChane}
        />
    </form>
   
  )
}
