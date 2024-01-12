import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddExpense from './AddExpense';

interface FormProps {
  handleOnSubmit: (values: { id: number; description: string; category: string; date: string; amount: number }) => void;
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
          <Modal.Title className='text-danger fw-bold'>* ADD EXPENSE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddExpense handleOnSubmit={handleOnSubmit} onHide={() => setShow(!show)} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CollectExpenses;
