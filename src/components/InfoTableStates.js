import { useState } from "react";


const InfoTableStates = () => {

    //table visibility
    const [nextlvlTableVisibility, setNextlvlTableVisibility] = useState("hidden");
    const [tableBtnVisibility, setTableBtnVisibility] = useState("hidden");
    const [restartBtnVisibility, setRestartBtnVisibility] = useState("hidden");
    const [tableText, setTableText] = useState("wohooo you did it!")


    return {nextlvlTableVisibility, setNextlvlTableVisibility, tableBtnVisibility, setTableBtnVisibility, restartBtnVisibility, setRestartBtnVisibility, tableText, setTableText};


}

export default InfoTableStates;