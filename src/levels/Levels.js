import { useRef } from "react";


import CanvasDef from "../components/CanvasDef";

//LEVELS IMPORT
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";

const Levels = () => {

    //CANVAS DEF
    const {scaleDef} = CanvasDef();

    //LEVELS DEFINITION
    const {level1} = Level1();
    const {level2} = Level2();
    const {level3} = Level3();

    //LEVELS VYBER
    const levels = [level1, level2, level3];
    const levelIndex = useRef(0);

    //FUNKCE NA NEXT LEVEL
    const nextlvl = () => {
        //level index change
        levelIndex.current = levelIndex.current + 1;

        //BOD 1 CHANGES
        xb1.current = levels[levelIndex.current].xb1;
        yb1.current = levels[levelIndex.current].yb1;
        vxb1.current = levels[levelIndex.current].vxb1; 
        vyb1.current = levels[levelIndex.current].vyb1; 
        
        //BOD 2 CHANGES
        rb2.current = levels[levelIndex.current].rb2 * scaleDef;
        mb2.current = 6 * Math.pow(10,24) * rb2.current / 10;
        xb2.current = levels[levelIndex.current].xb2;
        yb2.current = levels[levelIndex.current].yb2;

        //BOD 3 CHANGES
        rb3.current = levels[levelIndex.current].rb3 * scaleDef;
        mb3.current = 6 * Math.pow(10,24) * rb3.current / 10;
        xb3.current = levels[levelIndex.current].xb3;
        yb3.current = levels[levelIndex.current].yb3;

        //BOD 4 CHANGES
        rb4.current = levels[levelIndex.current].rb4 * scaleDef;
        xb4.current = levels[levelIndex.current].xb4;
        yb4.current = levels[levelIndex.current].yb4;

        //LEVEL NUBMER INFO
        console.log("LEVEL: " + (levelIndex.current));

    }

    const restart = () => {
        //level index change
        levelIndex.current = 0;

        //BOD 1 CHANGES
        xb1.current = levels[levelIndex.current].xb1;
        yb1.current = levels[levelIndex.current].yb1;
        vxb1.current = levels[levelIndex.current].vxb1; 
        vyb1.current = levels[levelIndex.current].vyb1; 
        
        //BOD 2 CHANGES
        rb2.current = levels[levelIndex.current].rb2 * scaleDef;
        mb2.current = 6 * Math.pow(10,24) * rb2.current / 10;
        xb2.current = levels[levelIndex.current].xb2;
        yb2.current = levels[levelIndex.current].yb2;

        //BOD 3 CHANGES
        rb3.current = levels[levelIndex.current].rb3 * scaleDef;
        mb3.current = 6 * Math.pow(10,24) * rb3.current / 10;
        xb3.current = levels[levelIndex.current].xb3;
        yb3.current = levels[levelIndex.current].yb3;

        //BOD 4 CHANGES
        rb4.current = levels[levelIndex.current].rb4 * scaleDef;
        xb4.current = levels[levelIndex.current].xb4;
        yb4.current = levels[levelIndex.current].yb4;


    }

    //DEFINICE BODU 1
    const rb1 = useRef(10 * scaleDef);    
    const mb1 = 6 * Math.pow(10, 24) * rb1.current / 10;
    const xb1 = useRef(levels[levelIndex.current].xb1);
    const yb1 = useRef(levels[levelIndex.current].yb1);
    const vxb1 = useRef(levels[levelIndex.current].vxb1);
    const vyb1 = useRef(levels[levelIndex.current].vyb1);

    //DEFINICE BODU 2
    const rb2 = useRef(levels[levelIndex.current].rb2 * scaleDef);
    const mb2 = useRef(6 * Math.pow(10,24) * rb2.current / 10);
    const xb2 = useRef(levels[levelIndex.current].xb2);
    const yb2 = useRef(levels[levelIndex.current].yb2);

    //DEFINICE BODU 3
    const rb3 = useRef(levels[levelIndex.current].rb3 * scaleDef);
    const mb3 = useRef(6 * Math.pow(10,24) * rb3.current / 10);
    const xb3 = useRef(levels[levelIndex.current].xb3);
    const yb3 = useRef(levels[levelIndex.current].yb3);

    //DEFINICE BODU 4 (cíl)
    const rb4 = useRef(levels[levelIndex.current].rb4 * scaleDef);
    const xb4 = useRef(levels[levelIndex.current].xb4);
    const yb4 = useRef(levels[levelIndex.current].yb4);



    return {rb1, mb1, xb1, yb1, vxb1, vyb1, rb2, mb2, xb2, yb2, rb3, mb3, xb3, yb3, rb4, xb4, yb4, nextlvl, levelIndex, restart};
}

export default Levels;