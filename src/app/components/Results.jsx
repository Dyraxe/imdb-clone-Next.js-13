function Results({ results }) {
  //   if (results.length === 0) return null;
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          {result.title} | {result.original_title}
        </div>
      ))}
    </div>
  );
}

export default Results;
