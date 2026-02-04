export default function AlertButton({ text, onSmash }) {
    return (
        <button onClick={onSmash}>{text}</button>
    )
    
}