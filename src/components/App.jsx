import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App(){
    return (
        <>
            <Header/>
            {notes.map((item) => {
                return(
                    <Note
                        key={item.key}
                        title= {item.title}  
                        content={item.content}
                    />
                )
            })}
            
            <Footer/>
        </>
    );
}

export default App;