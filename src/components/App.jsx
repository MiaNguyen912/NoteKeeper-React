import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [list, setList] = useState([])

    function addNote(newNote){
        setList(prevList => {
            return [...prevList, newNote]
        })
    }
    function deleteNote(id){
        setList((prevList) => {
            return prevList.filter((note, index) => {
              return index !== id;
            }); //return a new array without the note with the specified id
        });
    }

    return (
        <>
            <Header/>
            <CreateArea
                onAdd={addNote}
            />
            {list.map((item, index)=> {
                return(
                  <Note 
                    key={index} 
                    id={index}
                    title= {item.title} 
                    content={item.content}
                    onDelete={deleteNote}
                  />
                )
            })}
            <Footer/>
        </>
    );
}

export default App;