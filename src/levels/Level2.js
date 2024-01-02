
import CanvasDef from "../components/CanvasDef";


const Level2 = () => {

    //CANVAS DEF
    const {width, height} = CanvasDef();

    const level2 = {
        //BOD 2
        xb1: width / 2 - 200,
        yb1: height / 2 - 100.5,
        vxb1: -1,
        vyb1: 2,

        //BOD 2
        rb2: 30,
        xb2: width / 2 - 404,
        yb2: height / 2 - 200,
        
        //BOD 3
        rb3: 100,
        xb3: width / 2 + 150,
        yb3: width / 2 + 250,

        //BOD 4
        rb4: 50,
        xb4: width / 2 - 200,
        yb4: width / 2 + 300
    }

    return {level2};
}

export default Level2;