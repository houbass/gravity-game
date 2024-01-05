export default function Mobileinfo() {

    return(
        <>            
            <div 
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                zIndex: "10", 
                background: "black", 
            }}>
                    <div 
                    style={{
                        margin: "0px 30px",
                        background: "white", 
                        borderRadius: "20px",
                        padding: "20px"
                    }}>
                        <h3>Sorry this game is currently not available on mobiles</h3>
                    </div>
            </div>
        </>
    )
};