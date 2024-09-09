import { useState } from "react";
import { fetchData } from "../api/fetchSynonyms";

export type Synonym = {
  word: string;
  score: number;
};

export const useGetSynonyms = () => {
  const [synonym, setSynonym] = useState<Synonym[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSynonyms = (word: string) => {
    setIsLoading(true);
    fetchData(word)
      .then(setSynonym)
      .then(() => setIsLoading(false));
  };

  return { isLoading, synonym, getSynonyms };
};
