import { useState } from "react";

 
 
 const Description = () => {

    const [handleClick, setHandleClick] = useState(false);
    const [descVisibility, setDescVisibility] = useState("hidden");
    const [rotateBtn, setRotateBtn] = useState("0deg");
    const [radius, setRadius] = useState("0 0 20px 0");
    const [opacityHandler, setOpacityHandler] = useState("0");


    const showDesc = () => {

        setHandleClick(!handleClick);
            if(handleClick === false){
                setDescVisibility("visible");
                setRotateBtn("180deg");
                setRadius("0 0 0 0");
                setOpacityHandler("1");
            }else{
                setDescVisibility("hidden");
                setRotateBtn("0deg");
                setRadius("0 0 20px 0");
                setOpacityHandler("0");
            }
        };

    return (
        <div>

            <div         
            style={{
            position: "absolute",
            display: "flex",
            width: "185px",
            flexDirection: "row",
            height: "50px",
            padding: "0 20px",
            zIndex: "5", 
            color: "white",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: radius,
            visibility: "visible",
            textAlign: "left",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "1s"
        }}>
                <h3>How to play?</h3>
                <button className="description" onClick={showDesc} style={{rotate: rotateBtn}}>V</button>
            </div>

            <div         
            style={{
                position: "absolute",
                padding: "0 20px",
                paddingBottom: "6px",
                width: "185px",
                top: "50px",
                zIndex: "5", 
                background: "rgba(255, 255, 255, 0.9)", 
                borderRadius: "0 0 20px 0",
                visibility: descVisibility,
                textAlign: "left",
                transition: "1s ease",
                opacity: opacityHandler
            }}>
                <p><strong>"←" "→"</strong> rotate</p> 
                <p><strong>"spacebar"</strong> main engine</p>
                <p><strong>"w"</strong> forward</p>
                <p><strong>"s"</strong> back</p>
                <p><strong>"a"</strong> left</p>
                <p><strong>"d"</strong> right</p>
            </div>
        </div>
    )
 }

 export default Description;