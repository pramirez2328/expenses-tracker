import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddExpense from './AddExpense';

interface FormValues {
  id: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}
interface FormProps {
  handleOnSubmit: (values: FormValues) => void;
}

function CollectExpenses({ handleOnSubmit }: FormProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant='primary' onClick={() => setShow(!show)}>
        Add Expense
      </Button>

      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddExpense handleOnSubmit={handleOnSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CollectExpenses;
