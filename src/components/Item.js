

function Item (props) {
    return(
        <li>
            
            <span>{props.date}</span>
            <span>{props.amount}</span>
            <span>{props.paymentMode}</span>
            <span> {props.remark}</span>           
         
        </li>
    );
    }
    export default Item;