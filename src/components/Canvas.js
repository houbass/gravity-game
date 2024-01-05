import React, { useEffect, useRef } from "react";

//CANVAS DEFINITION IMPORT
import CanvasDef from "./CanvasDef.js";

//pictures
import Spaceship from "../pic/Spaceship.svg";

//GRAVITATION DEFINITION IMPORT
import GravitationDef from "./GravitationDef.js";

//CONTROLS IMPORT
import Controls from "./Controls.js";

//LEVELS IMPORT
import Levels from "../levels/Levels.js";

//INFOTABLE STATES
import InfoTableStates from "./InfoTableStates.js";

//STTSHOOKS
import StatsHooks from "./StatsHooks.js";

const CanvasPage = () => {
    const canvasRef = useRef(null);

    //CANVAS DEFINITION
    const {width, height } = CanvasDef();

    //GRAVITATION DEFINITION
    const {rAmp, gAmp, gravityFun, sinBFun, cosBFun} = GravitationDef();

    //CONTROLS
    const {up, down, left, right, go, goStop, triskaVis, triskaSmerX, triskaSmerY, fuel, fuelMax, rotate, tah, hlavniTriksaVis} = Controls();

    //LEVELS
    const {rb1, xb1, yb1, vxb1, vyb1, rb2, mb2, xb2, yb2, rb3, mb3, xb3, yb3, rb4, xb4, yb4, restart} = Levels();

    //INFOTABLE STATES
    const {nextlvlTableVisibility, setNextlvlTableVisibility, restartBtnVisibility, setRestartBtnVisibility, tableText, setTableText} = InfoTableStates();
    
    const restartFun = () => {
        setNextlvlTableVisibility("hidden");
        setRestartBtnVisibility("hidden");
        fuel.current = fuelMax;
        fuelColor.current = "green";
        restart();
    }

    //RAKETKA IMG
    const img = new Image();
    img.src = Spaceship;

    //STATS TABLE
    const {fuelShow, setFuelShow, fuelColor} = StatsHooks();

    //NAVIGATION
    const rNav1 = useRef(rb4.current - 10);
    const rNav2 = useRef(rb4.current -20);
    const rNav3 = useRef(rb4.current - 30);


    useEffect(() => {
        //CANVAS DEF
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        //animation handler (zabranuje aby se animace zrychlovala po kazdem updatu)
        const timerIdHolder = {timerId: null};



        //ULOŽENÍ PREDCHOZICH POLOH Xb1 + Yb1 a Xb2 + Yb2 
        const previousXb1 = [];
        const previousYb1 = [];
        const previousXb2 = [];
        const previousYb2 = [];

        //animation function
        const render = () => { 

            //CLERING OPERACE
            context.clearRect(0, 0, canvas.width, canvas.height);

            timerIdHolder.timerId = window.requestAnimationFrame(render)

            //CONTROLS LISTENER
            window.addEventListener("keydown", go);
            window.addEventListener("keyup", goStop);

            //FLYING PATH push previous xb1.current + yb1.current
            previousXb1.push(xb1.current);
            previousYb1.push(yb1.current);
            previousXb2.push(xb2.current);
            previousYb2.push(yb2.current);

            //POHYB V GRAVITACNIM POLI
            //vzdalenosti L12 a uhel Beta12
            const Lx12 = xb2.current - xb1.current;
            const Ly12 = yb2.current - yb1.current;
            const L12check = Math.sqrt(Math.pow(Lx12, 2) + Math.pow(Ly12, 2));
            let L12;

            //zabranuje zrychleni pres stred
            if(L12check < rb1.current + rb2.current){
                L12 = (rb1.current + rb2.current) * rAmp;
            }else{
                L12 = L12check * rAmp
            }
            const sinB12 = sinBFun(Ly12, L12);
            const cosB12 = cosBFun(Lx12, L12);

            //vzdalenosti L13 a uhel Beta13
            const Lx13 = xb3.current - xb1.current;
            const Ly13 = yb3.current - yb1.current;
            const L13check = Math.sqrt(Math.pow(Lx13, 2) + Math.pow(Ly13, 2));
            let L13;

            //zabranuje zrychleni pres stred
            if(L13check < rb1.current + rb3.current){
                L13 = (rb1.current + rb3.current) * rAmp;
            }else{
                L13 = L13check * rAmp;
            }
            const sinB13 = sinBFun(Ly13, L13);
            const cosB13 = cosBFun(Lx13, L13);

            //vzdalenosti L14
            const Lx14 = xb4.current - xb1.current;
            const Ly14 = yb4.current - yb1.current;
            const L14check = Math.sqrt(Math.pow(Lx14, 2) + Math.pow(Ly14, 2));

            //NEXT LEVEL IF:
            if(L14check <= rb4.current) {
                setNextlvlTableVisibility("visible");
                setTableText("wohooo you did it!");
                setRestartBtnVisibility("visible");

                return
            }

            //GET LOST IF
            if( xb1.current > width + 200 || xb1.current < -200){
                setNextlvlTableVisibility("visible");
                setTableText("you get lost :(");
                setRestartBtnVisibility("visible");

                return
            }
            if( yb1.current > height + 200 || yb1.current < - 200){
                setNextlvlTableVisibility("visible");
                setTableText("you get lost :(");
                setRestartBtnVisibility("visible");

                return
            }

             //OUT OF FUEL IF
            if(fuel.current <= 0){
                setNextlvlTableVisibility("visible");
                setTableText("YOU RUN OUT OF FUEL");
                setRestartBtnVisibility("visible");
                setFuelShow(0);
                
                return 
            }
            //ZOBRAZENI PALIVA
            setFuelShow(fuel.current);

            //FUEL BAR (LOW FUEL)
            if(fuel.current < 50){
                fuelColor.current = "red";
            }


            //vypocet Gb2
            const Gb2 = gravityFun(mb2.current, L12);
            const Gyb2 = sinB12 * Gb2 * gAmp;
            const Gxb2 = cosB12 * Gb2 * gAmp;

            //vypocet Gb3 pro Gb1
            const Gb13 = gravityFun(mb3.current, L13);
            const Gyb13 = sinB13 * Gb13 * gAmp;
            const Gxb13 = cosB13 * Gb13 * gAmp;


            //vypocet tahu
            const rotateRadians = rotate.current * Math.PI/180;
            const sinTahu = Math.sin(rotateRadians);
            const cosTahu = Math.cos(rotateRadians);
            const tahX = -1 * sinTahu * tah.current;
            const tahY = cosTahu * tah.current;

        
            //Ovlivňování vektoru12 gravitaci
            vxb1.current = vxb1.current + Gxb2 + Gxb13 + left.current + right.current + tahX;
            vyb1.current = vyb1.current + Gyb2 + Gyb13 + up.current + down.current + tahY;

            //hlavní pohyb
            xb1.current = xb1.current + vxb1.current;
            yb1.current = yb1.current + vyb1.current;

            //BOD 2
            context.save();
            context.beginPath();
            context.arc(xb2.current, yb2.current, rb2.current, 0, 2 * Math.PI);
            context.fillStyle = "lightblue";
            context.fill();
            context.restore();

            //BOD 3
            context.save();
            context.beginPath();
            context.arc(xb3.current, yb3.current, rb3.current, 0, 2 * Math.PI);
            context.fillStyle = "orange";
            context.shadowColor = "white";
            context.shadowBlur = 100;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.fill();
            context.restore();

            //BOD 4 CÍL
            const rNavFun1 = (r) => {
                rNav1.current = r - 0.2;
               return r;
            }
            const rNavFun2 = (r) => {
                rNav2.current = r - 0.2;
               return r;
            }
            const rNavFun3 = (r) => {
                rNav3.current = r - 0.2;
               return r;
            }

            context.save();
            context.beginPath();
            context.arc(xb4.current, yb4.current, rb4.current, 0, 2 * Math.PI);
            context.shadowColor = "rgba(255, 255, 255, 0.3)";
            context.shadowBlur = 50;
            context.strokeStyle = "rgba(0, 255, 60, 0.8)";
            context.lineWidth = 10;

            context.stroke();

            context.fill();
            context.restore();
            //line1
            context.save();
            context.beginPath();
            context.arc(xb4.current , yb4.current, rNavFun1(rNav1.current), 0, 2 * Math.PI);
            context.strokeStyle = "rgba(0, 255, 50, " + (rNav1.current / 100) + ")" ;
            context.lineWidth = 2;
            context.stroke();
            context.restore();

            //line2
            context.save();
            context.beginPath();
            context.arc(xb4.current , yb4.current, rNavFun2(rNav2.current), 0, 2 * Math.PI);
            context.strokeStyle = "rgba(0, 255, 50, " + (rNav2.current / 100) + ")" ;
            context.lineWidth = 2;
            context.stroke();
            context.restore();
            //line3
            context.save();
            context.beginPath();
            context.arc(xb4.current , yb4.current, rNavFun3(rNav3.current), 0, 2 * Math.PI);
            context.strokeStyle = "rgba(0, 255, 50, " + (rNav3.current / 100) + ")" ;
            context.lineWidth = 2;
            context.stroke();
            context.restore();
            if (rNav1.current < 10){
                rNav1.current = rb4.current;
            }
            if (rNav2.current < 10){
                rNav2.current = rb4.current;
            }
            if (rNav3.current < 10){
                rNav3.current = rb4.current;
            }

            //RAKETKA
            context.save();
            context.beginPath();
            context.translate(xb1.current ,yb1.current);
            context.rotate(rotate.current * Math.PI / 180);                
            context.rotate(-45 * Math.PI / 180);
            context.translate(-50 , -30);
            context.scale(0.1, 0.1);
            context.drawImage(img, 0, 0);


            context.closePath()
            context.restore();


            //TRISKA MENSI
            context.save();
            context.beginPath();
            context.arc(xb1.current + triskaSmerX.current, yb1.current + triskaSmerY.current, 1, 0, 2 * Math.PI);
            context.globalAlpha = triskaVis.current;
            context.strokeStyle = "white";
            context.fillStyle = "white";
            context.lineTo(xb1.current, yb1.current);
            context.stroke();
            context.closePath()
            context.restore();

            //TRISKA VELKA
            context.save();
            context.beginPath();
            context.translate(xb1.current ,yb1.current);
            context.rotate(rotate.current * Math.PI / 180);
            context.globalAlpha = hlavniTriksaVis.current;
            context.lineWidth = 3;
            context.strokeStyle = "white";
            context.moveTo(0, 50)
            context.lineTo(0, 90);

            context.moveTo(10, 50)
            context.lineTo(20, 80);

            context.moveTo(-10, 50)
            context.lineTo(-20, 80);
            
            context.stroke();
            context.closePath()
            context.restore();

            //TRASA BODU 1
            for(let i = 1; i < 50; i++){
                context.save();
                context.beginPath();
                context.globalAlpha = 1 - i / 50;
                context.fillStyle = "rgb(255, 255, 255)";
                context.arc(previousXb1[previousXb1.length - 5 * i], previousYb1[previousYb1.length - 5 * i], 0.5, 0, Math.PI * 2);
                context.fill();
                context.closePath()
                context.restore();
            }
        

            //FUEL BAR
            context.save();
            context.beginPath();
            context.fillStyle = "white";
            context.translate(width / 2 -100 , 60);
            context.rect(0, 0, 200, 10);
            context.fill();
            context.closePath();
            context.restore();

            context.save();
            context.beginPath();
            context.fillStyle = fuelColor.current;
            context.translate(width / 2 -100 , 60);
            context.rect(0, 0, fuel.current, 10);
            context.fill();
            context.closePath()
            context.restore();
        };
        render();

        //CANCEL animation request + event listeneres
        return () => {
            cancelAnimationFrame(timerIdHolder.timerId);
            window.removeEventListener("keydown", go);
            window.removeEventListener("keyup", goStop);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="canvas">

            <canvas id="canvas" ref={canvasRef} height={height} width={width} style={{background: "black"}} />

            <div 
            style={{
                position: "absolute",
                padding: "30px",
                top: "30%", 
                zIndex: "5", 
                background: "white", 
                borderRadius: "20px",
                visibility: nextlvlTableVisibility 
            }}>
                <h1>{tableText}</h1>
                <button onClick={restartFun} style={{visibility: restartBtnVisibility, marginTop: "20px"}}>AGAIN</button>
            </div>
            
            <div 
            style={{
                position: "absolute",
                padding: "0px 10px", 
                zIndex: "5", 
                color: "white", 
                borderRadius: "20px",
                visibility: "visible" 
            }}>
                <h1>Fuel: {fuelMax} / {Math.round(fuelShow)}</h1>

            </div>


        </div>
    )
}

export default CanvasPage;