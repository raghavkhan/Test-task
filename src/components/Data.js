import { useState} from "react";
import Form from "./Form";
import List from './List';


const receipts = [];
function Data() {
  
const [dataInArrayForm, setDataInArrayForm ] = useState([]);


  function objectDataHandler(dataInObjectForm) {
    
   console.log(dataInObjectForm);
    receipts.push(dataInObjectForm);
    console.log(receipts);
    
    setDataInArrayForm(receipts);
      }
      
          
  return (
    <section>
      <h1>Add Receipt</h1>
      <Form objectData={objectDataHandler} />
      <List receipts = {dataInArrayForm} />
    </section>
  );
}

export default Data;
