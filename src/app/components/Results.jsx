import Card from "./Card";

function Results({ results }) {
  //   if (results.length === 0) return null;
  return (
    <div className="mx-auto max-w-6xl py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
