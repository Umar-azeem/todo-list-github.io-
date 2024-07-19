import { useState } from 'react';
import './App.css';
import DotoInput from './components/DotoInput';
import DotoList from './components/DotoList';

function App() {
  const[dotolist,setdotolist] = useState([]);
  // dotolist = ["hi","hello","three"]
  // dotolist1 = ...dotolist  = "h1", "hello","three"
  let addlist =(inputtext)=>{
    if(inputtext!=='')
    setdotolist([...dotolist,inputtext]);
  }
  const deleteListItem =(key)=>{                // = [0,1,2,3] - key = 3
    const filteredArray = dotolist.filter((e,i) => i !== key)
    setdotolist(filteredArray);
  }
  const editItem = (key, newValue) => {
    const updatedList = dotolist.map((item, index) => (index === key ? newValue : item));
    setdotolist(updatedList);
  };
  return (
    <>
    <section className='w-screen h-screen bg-black'>
     <div className='w-full h-auto flex flex-col justify-center'>
     <DotoInput addlist={addlist}/> 
     <div className='w-full flex mt-4 flex-col justify-center items-center'>   
     <h1 className="text-2xl text-yellow-200 ">TODO</h1>
     <hr className="w-2/4 h-4 "></hr>
     {dotolist.map((listItem,i) =>{ // [1,2,3]
      return(
        <DotoList key={i} index={i} item={listItem} deleteItem={deleteListItem} editItem={editItem}/>
      )
     })}
     </div>
     </div>
    </section>
    </>
  );
}
export default App;
