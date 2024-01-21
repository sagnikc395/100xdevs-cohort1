
function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Thatchar"];

  return (
    <div>
      <Header title="develop, preview and ship 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}> %% {name}</li>
        ))}
      </ul>
    </div>
  );
}
