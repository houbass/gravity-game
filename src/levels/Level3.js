
import CanvasDef from "../components/CanvasDef";


const Level3 = () => {

    //CANVAS DEF
    const {width, height} = CanvasDef();

    const level3 = {
        //BOD 2
        xb1: width / 2 - 80,
        yb1: height / 2 + 120.5,
        vxb1: -1,
        vyb1: 2,

        //BOD 2
        rb2: 180,
        xb2: width / 2 + 304,
        yb2: height / 2 - 200,
        
        //BOD 3
        rb3: 70,
        xb3: width / 2 - 150,
        yb3: width / 2 + 250,

        //BOD 4
        rb4: 30,
        xb4: width / 2 + 100,
        yb4: width / 2 + 400
    }

    return {level3};
}

export default Level3;