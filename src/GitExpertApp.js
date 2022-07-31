import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

 const GitExpertApp = () => {

 
   const [categories, setCategories] = useState(['One Punch'])

  //  const handleAdd = () =>{

  //    setcategories([...categories, 'Hola'])
  
  //  }
  return (
    <> 
    <h2>GitExpertApp</h2>
    <hr />
    <AddCategory setCategories={setCategories}/>
    <ol>
 {
    
     categories.map(category =>(
  <GitGrid 
  key={category}
   category={category}
   />
    
  ))

 }

    </ol>
    </>
  )
}
 export default GitExpertApp;