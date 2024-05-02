export default function Docs({ params }) {
  console.log(params);
  if (params.slugs.length === 1) {
    return (
      <div>
        <h1>Reviewing Docs for {params.slugs[0]}</h1>
      </div>
    );
  } else if (params.slugs.length === 2) {
    return (
      <div>
        <h1>
          Reviewing Docs for {params.slugs[0]} and for {params.slugs[1]}
        </h1>
      </div>
    );
  return (
    <div>
      <h1>Welcome to Docs.</h1>
    </div>
  );
}
