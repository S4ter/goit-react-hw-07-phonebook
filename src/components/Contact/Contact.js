import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className="filter_form">
      <p key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className="delete_button"
          onClick={() => handleDelete(contact.id)}
        >
          Delete
        </button>
      </p>
    </div>
  );
};
