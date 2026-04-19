const authors = [
  {
    name: "Emile Zola",
    description:
      "A leading naturalist novelist whose work emphasized environment, heredity, and social conditions.",
  },
  {
    name: "Stephen Crane",
    description:
      "An American writer known for depicting conflict, survival, and human limitation with stark realism.",
  },
  {
    name: "Frank Norris",
    description:
      "A novelist who brought naturalist ideas into American fiction through stories of instinct and social pressure.",
  },
];

function Authors() {
  return (
    <section className="max-w-5xl mx-auto space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold">Authors</h1>
        <p className="text-zinc-400 text-lg">
          A few major writers commonly associated with literary naturalism.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {authors.map((author) => (
          <article
            key={author.name}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-2xl font-semibold">{author.name}</h2>
            <p className="mt-3 text-zinc-400 leading-7">{author.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Authors;
