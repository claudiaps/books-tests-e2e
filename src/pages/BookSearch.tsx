import React, { useState } from "react";
import axios from "axios";

interface Book {
  key: string;
  title: string;
  first_publish_year: number;
}

const BookSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
      );
      const docs = response.data.docs;

      const filteredBooks: Book[] = docs.map((doc: any) => ({
        key: doc.key,
        title: doc.title,
        first_publish_year: doc.first_publish_year || "Desconhecido",
      }));

      setBooks(filteredBooks);
    } catch (err) {
      setError("Erro ao buscar livros. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Busca de Livros</h1>

      <div className="flex gap-8 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o título do livro"
          className="flex-1 p-2 border rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.key} className="border p-3 rounded shadow-sm">
            <strong>Título: {book.title}</strong>
            <p>Ano de publicação: {book.first_publish_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
