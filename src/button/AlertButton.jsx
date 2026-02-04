export default function AlertButton({text, message}){

function handleClick(e){
    console.info(e.target);
    alert(message)
}
    return(
        <button onClick={handleClick} style={
            {
                backgroundColor :"#8176f8",
                border : "none",
                paddingTop : "15px",
                paddingBottom : "15px",
                paddingRight : "25px",
                paddingLeft : "25px",
                borderRadius : "10px",
                color : "white",
                marginTop : "50px",
            }
        }>{text}</button>
    )
}