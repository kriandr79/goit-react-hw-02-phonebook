export default function ContactList({ contacts }) {

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number} <button type="button">delete</button>
        </li>
      ))}
    </ul>
  );
}
