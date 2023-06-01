import React from "react";
import "./Header.css"
import { MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material";
import categories from "../data/category";

const Header = ({setCategory, category, word, setWord, LightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    const handleCHange = (language) => {
        setCategory(language);
        setWord("");
    }

    return ( 
        <div className="header">
            <span className="title">{word ? word : "myDictionary"} </span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme} >
                    <TextField className="search"  label="Search a word" variant="standard" value={word} onChange={(e)=> setWord(e.target.value)}/>
                    <TextField className="select" select label="Language" value={category} onChange={(e)=>handleCHange(e.target.value)} variant="standard" > 
                        
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{ option.value}</MenuItem> 
                            ))
                        }
                 </TextField>
                </ThemeProvider>

            </div>
        </div>
     );
}
 
export default Header;