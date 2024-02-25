import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph(){

    const context = useContext(ThemeContext);

    return (
        <p className={context.theme}>
            hello xin chao hello xin chao
        </p>
    )
}

export default Paragraph;