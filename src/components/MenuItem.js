
function MenuItem(props){
    let more=(props.submenu===true)?"more":""
    // console.log(props.submenu)
    // let dditem=(!props.dditem)?"":"dropdown-item"
    // here you can use ${dditem} if
    return (
        <li className={`mb-item ${more}`} onClick={props.click}> 
            <img className={`mb-item-icon`}  src={props.icon}></img>
            <p className={`mb-item-name`}>{props.itemName}</p>
            {props.children}
        </li>
    )
}
export default MenuItem

