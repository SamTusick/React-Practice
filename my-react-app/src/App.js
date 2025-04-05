import MyButton from "./components/Button";
import Images from "./components/Image";
import {Image} from "./components/Image"


export default function App(){
    return(
        <div>
            <h1>Welcome!</h1>
            <MyButton/>
            <h2>This is grabbing the multiple images</h2>
            <Images/>
            <div>
                <h2>This is only grabbing the Image</h2>
                <Image/>
            </div>
        </div>
    );
}