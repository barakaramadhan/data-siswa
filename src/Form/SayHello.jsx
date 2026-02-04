export default function SayHello(){
    return(
        <div>
            <form>
                <input type="text" id="input_name" />
                <button onClick={
                    (e) =>{
                        e.preventDefault();
                       const name = document.getElementById("input_name").value;
                       document.getElementById("text_helo").innerHTML = `Hello ${name}`
                    }
                }>Say Hello</button>
            </form>
            <h1 id="text_helo">Hello World</h1>
        </div>
    )
}