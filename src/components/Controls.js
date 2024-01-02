import { useRef } from "react";

const Controls = () => {

    //MOVES VAR
    const up = useRef(0);
    const down = useRef(0);
    const left = useRef(0);
    const right = useRef(0);
    const rotate = useRef(0);
    const tah = useRef(0);

    //TRISKA VISIBLE
    const triskaVis = useRef("0");
    const hlavniTriksaVis = useRef("0");
    const triskaSmerX = useRef(0);
    const triskaSmerY = useRef(0);

    //def zrychlení
    const a = 0.009;
    const a2 = 0.019;

    //FUEL
    const fuelMax = 200;
    const fuel = useRef(fuelMax);
    const fuelConsume = 1;

    //GO FUNKCE
    const go = (e) => {
    
        //GO UP
        if(e.key === "w" || e.key === "W"){
            up.current = -1 * a;
            fuel.current = fuel.current - fuelConsume;
            triskaVis.current = "1";
            triskaSmerY.current = 30;
        }

        //GO DOWN
        if(e.key === "s" || e.key === "S"){
            down.current = a;
            fuel.current = fuel.current - fuelConsume;
            triskaVis.current = "1";
            triskaSmerY.current = -30;
        }

        //GO LEFT
        if(e.key === "a" || e.key === "A"){
            left.current = -1 * a;
            fuel.current = fuel.current - fuelConsume;
            triskaVis.current = "1";
            triskaSmerX.current = 30;
        }

        //GO RIGHT
        if(e.key === "d" || e.key === "D"){
            right.current = a;
            fuel.current = fuel.current - fuelConsume;
            triskaVis.current = "1";
            triskaSmerX.current = -30;
        }
        
        //ROTATE RIGHT
        if(e.key === "ArrowRight"){
            rotate.current = rotate.current + 5;
            fuel.current = fuel.current - fuelConsume / 2;
        }

        //ROTATE LEFT
        if(e.key === "ArrowLeft"){
            rotate.current = rotate.current - 5;
            fuel.current = fuel.current - fuelConsume / 2;
        } 

        //TAH DOPREDU
        if(e.key === " "){
            tah.current = -1 * a2;
            fuel.current = fuel.current - fuelConsume - 2;
            hlavniTriksaVis.current = "1";
        } 

    };

    //STOP FUNKCE
    const goStop = (e) => {
        //GO UP STOP
        if(e.key === "w" || e.key === "W"){
            up.current = 0;
            triskaVis.current = "0";
            triskaSmerY.current = 0;
        }

        //GO DOWN STOP
        if(e.key === "s" || e.key === "S"){
            down.current = 0;
            triskaVis.current = "0";
            triskaSmerY.current = 0;
        }

        //GO LEFT STOP
        if(e.key === "a" || e.key === "A"){
            left.current = 0;
            triskaVis.current = "0";
            triskaSmerX.current = 0;
        }

        //GO RIGHT STOP
        if(e.key === "d" || e.key === "D"){
            right.current = 0;
            triskaVis.current = "0";
            triskaSmerX.current = 0;
        }

        //TAH DOPREDU STOP
        if(e.key === " "){
            tah.current = 0;
            hlavniTriksaVis.current = "0";
        } 
    };

    return {up, go, goStop, down, left, right, triskaVis, triskaSmerX, triskaSmerY, fuel, fuelMax, rotate, tah, hlavniTriksaVis};
}

export default Controls;
