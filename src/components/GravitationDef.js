

const GravitationDef = () => {

    //GRAVITY AMP
    const rAmp = 2 * Math.pow (10, 5)
    const gAmp = 2 * 2500;

    //FUNKCE PRO GRAVITACNI ZRYCHLENÍ
    const gc = 6.67424 * Math.pow(10, -11);
    const gravityFun = (m, r) => {
        return gc * m / Math.pow(r, 2);
    }

    //FUNKCE PRO sinB + cosB
    const sinBFun = (y, l) => {
        return y / l
    } 
    const cosBFun = (x, l) => {
        return x / l
    } 


    

    return {rAmp, gAmp, gravityFun, sinBFun, cosBFun};
}

export default GravitationDef;