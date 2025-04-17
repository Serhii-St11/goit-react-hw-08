import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import { toast } from "react-hot-toast";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^\+?[0-9]{1,4}?[-.()\s]?[0-9]{1,4}[-.()\s]?[0-9]{1,4}[-.()\s]?[0-9]{1,9}$/,
        "Invalid number format"
      )
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully!");
        resetForm();
      })
      .catch(() => toast.error("Failed to add contact!"));
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Number
          <Field type="text" name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
