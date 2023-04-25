import React, {useState} from "react";
import {BiAddToQueue} from 'react-icons/bi'; //add icon

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const [isExpanded, setExpanded] = useState(false)
    //-------------------------

    function handleChange(event){
        const {name, value} = event.target  //get name and value from event.target
        console.log(event)
        setNote(prevNote => {
            return {...prevNote, [name]: value};
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
    }
    function expand (){
        setExpanded(true)
    }
    //-------------------------
   
    return (
        <div>
        <form onSubmit={handleSubmit} className="create-note">
            {isExpanded && <input
                onChange={handleChange} 
                name="title" 
                value={note.title}
                placeholder="Title" 
            />}
            <textarea 
                onChange={handleChange} 
                onClick={expand}
                name="content" 
                value={note.content}
                placeholder="Take a note..." 
                rows={isExpanded? 3 : 1}
            />
            {isExpanded && <button 
                type="submit"
            ><BiAddToQueue/></button>}
        </form>
        </div>
    );
}

export default CreateArea;
