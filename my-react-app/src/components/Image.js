import "../styles.css";

export function Image(){
    return(
    <div>
        <img className= "image" src="https://i.imgur.com/kvpCZiW_d.webp?maxwidth=520&shape=thumb&fidelity=high" alt="Eagle" />
    </div>
    );
}

export default function Images(){
    return(
        <>
            <h1>Eagles</h1>
            <Image/>
            <Image/>
            <Image/>
        </>
    );
}