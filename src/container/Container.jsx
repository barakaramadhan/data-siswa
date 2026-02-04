export default function Container({ children }) {
    return(
        <div className="container">
            <h1>Pondok tahfizh plus abudzar</h1>
            {children}
            <footer>
                <p>Copyright &copy; 2023 Pondok Tahfizh Plus Abudzar</p>    
            </footer>
        </div>
    )
}   