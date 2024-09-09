import { useState } from "react";
import "./App.css";
import { useGetSynonyms } from "./hooks/useGetSynonyms";

function App() {
  const [word, setWord] = useState("");
  const { isLoading, synonym, getSynonyms } = useGetSynonyms();

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
  };

  const handleSynonymsClicked = (newWord: string) => {
    getSynonyms(newWord);
  };

  return (
    <>
      <div>
        <form onSubmit={handleFetchSynonyms}>
          <label htmlFor="synonyms">Check synonyms:</label>
          <input
            type="text"
            id="synonyms"
            value={word}
            onChange={e => setWord(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {synonym.map((element, idx) => (
            <li
              key={idx}
              onClick={() => {
                handleSynonymsClicked(element.word);
                setWord(element.word);
              }}
            >
              {element.word}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
