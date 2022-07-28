import { useRef } from "react";

function Form(props) {
  
  const dateInputRef = useRef();
  const amountInputRef = useRef();
  const paywayInputRef = useRef();
  const remarkInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    
    
    const enteredDate = dateInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredPaymentMode = paywayInputRef.current.value;
    const enteredRemark = remarkInputRef.current.value;

    const receipt = {
            
      date: enteredDate,
      amount: enteredAmount,
      paymentMode: enteredPaymentMode,
      remark: enteredRemark,
    };

    props.objectData(receipt);
  }

  return (
    <form onSubmit={submitHandler}>
      
      
      <div>
        <label htmlFor="payDate"> Date: </label>
        <input
          type="date"
          id="payDate"
          placeholder="Enter Date"
          required
          ref={dateInputRef}
        />
      </div>
      <br />

      <div>
        <label htmlFor="payAmount"> Amount:</label>
        <input
          type="number"
          id="payAmount"
          placeholder="Enter Amount(in INR)"
          required
          ref={amountInputRef}
        />
      </div>
      <br />

      <div>
        <label htmlFor="payway">Payment Mode:</label>
        <select name="" id="payway" required ref={paywayInputRef}>
          <option value="cash" selected>
            Cash
          </option>
          <option value="cheque">Cheque</option>
          <option value="card">Card</option>
          <option value="upi">UPI</option>
        </select>
      </div>
      <br />

      <div>
        <label htmlFor="remark">Remark:</label>
        <textarea id="remark" placeholder="Enter Remark" ref={remarkInputRef}>
          
        </textarea>
      </div>
      <br />

      <div>
        <button>CANCEL</button>
      </div>
      <br />

      <div>
        <button> SUBMIT</button>
      </div>
    </form>
  );
}

export default Form;
