import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target
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
   
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        <input 
            onChange={handleChange} 
            name="title" 
            value={note.title}
            placeholder="Title" 
        />
        <textarea 
            onChange={handleChange} 
            name="content" 
            value={note.content}
            placeholder="Take a note..." rows="3" 
        />
        <button 
            type="submit"
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
