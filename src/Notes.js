export const Notes = ({ title, body }) => {
  // console.log("Notes fue renderizada");
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};
