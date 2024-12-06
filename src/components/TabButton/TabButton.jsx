export default function TabButton({children, onClick, isSelected }){
    return (
        <li>
            <button className={isSelected} onClick={onClick}>{children}</button>
        </li>
    )
}