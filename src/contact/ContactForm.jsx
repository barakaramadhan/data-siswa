import { useImmer } from "use-immer";

export default function ContactForm(){
    const [contact, setContact] = useImmer({
        name: '',
        message: ''
    })

    function handleNameChange(e){
        setContact(draf=> {draf.name = e.target.value})
    }

    function handleMessageChange(e){
        setContact(draf=>{draf.message = e.target.value})
    }

    return(
        <div>
            <h1>Contact Form</h1>
        <form>
            <input type="text" placeholder="Masukan Nama" value={contact.name} onChange={handleNameChange}/> <br />
            
            <input type="text" placeholder="Masukan Pesan" value={contact.message} onChange={handleMessageChange}/>
        </form>
        <h1>Contact Detail</h1>
        <p>Name: {contact.name}</p>
        <p>Message: {contact.message}</p>
        </div>
    )
}