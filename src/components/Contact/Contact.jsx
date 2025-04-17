import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { toast } from "react-hot-toast";
import { FcPhone, FcReadingEbook } from "react-icons/fc";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(contact.id))
        .unwrap()
        .then(() => toast.success("Contact deleted successfully!"))
        .catch(() => toast.error("Failed to delete contact!"));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateContact({ id: contact.id, name, number }))
      .unwrap()
      .then(() => {
        toast.success("Contact updated successfully!");
        setIsEditing(false);
      })
      .catch(() => toast.error("Failed to update contact!"));
  };

  return (
    <li className={css.item}>
      {isEditing ? (
        <div className={css.editContainer}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={css.input}
          />
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={css.input}
          />
          <button onClick={handleSave} className={css.button}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className={css.button}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <p className={css.text}>
            <FcReadingEbook /> {contact.name}
          </p>
          <p className={css.text}>
            <FcPhone /> {contact.number}
          </p>
          <button onClick={handleEdit} className={css.button}>
            Edit
          </button>
          <button onClick={handleDelete} className={css.button}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
