// Simulate Elasticsearch call
export function fetchFromElastic() {
  return {
    source: "Elasticsearch",
    data: [
      { id: "abc", title: "Elastic Report 1", relevance: 0.9 },
      { id: "def", title: "Elastic Report 2", relevance: 0.7 }
    ]
  };
}
