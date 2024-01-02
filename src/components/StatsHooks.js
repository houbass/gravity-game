

import { useRef, useState } from "react";

const StatsHooks = () => {

    //SHOWING FUEL
    const [fuelShow, setFuelShow] = useState(null);
    const fuelColor = useRef("green");

    return{fuelShow, setFuelShow, fuelColor};
}

export default StatsHooks;