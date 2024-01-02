
import CanvasDef from "../components/CanvasDef";


const Level1 = () => {

    //CANVAS DEF
    const {width, height} = CanvasDef();

    const widthEdit = width / 5;
    const widthMath = width - widthEdit - widthEdit;
    const heightEdit = height / 5;
    const heightMath = height - heightEdit - heightEdit;

    const level1 = {
        //BOD 1
        xb1: width / 2 + 400,
        yb1: height / 2 + 400.5,
        vxb1: 1,
        vyb1: -1,

        //BOD 2
        rb2: Math.round(Math.random() * 100) + 100,
        xb2: Math.round(Math.random() * widthMath) + widthEdit,
        yb2: Math.round(Math.random() * heightMath) + heightEdit,
        
        
        //BOD 3
        rb3: Math.floor(Math.random() * 100) + 50,
        xb3: Math.round(Math.random() * widthMath) + widthEdit,
        yb3: Math.round(Math.random() * heightMath) + heightEdit,

        //BOD 4
        rb4: 100,
        xb4: Math.round(Math.random() * widthMath) + widthEdit,
        yb4: Math.round(Math.random() * heightMath) + heightEdit,
    }
//console.log("width edit" + widthEdit);
//console.log(Math.round((Math.random() * 7)) + 2);
//console.log(Math.round((Math.random() * heightMath)) + heightEdit);
    return {level1};

}

export default Level1;