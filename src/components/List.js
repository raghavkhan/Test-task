import Item from './Item';

function List (props) 
 {
        return (
          <ul >
            {props.receipts.map(receipt => 
              <Item
                
                date={receipt.date}
                amount={receipt.amount}
                paymentMode={receipt.paymentMode}
                remark={receipt.remark}
                
           /> )}
          </ul>
        );
      

}

export default List;