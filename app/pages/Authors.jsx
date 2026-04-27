import Card from "../components/Card";
import { authors } from "../data/authors";

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
          Card({title: author.name, description: author.description, id: author.id, lifespan: author.lifespan})
        ))}
      </div>
    </section>
  )
}

export default Authors;
