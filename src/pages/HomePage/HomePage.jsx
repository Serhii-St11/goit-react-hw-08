import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1>Welcome to Phonebook</h1>
      <p>
        This is a simple phonebook application where you can manage your
        contacts. Please register or log in to access your personal contact
        list.
      </p>
    </div>
  );
}
