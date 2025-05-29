// Simulate DB call
export function fetchFromDatabase() {
  return {
    source: "Database",
    data: [
      { id: 1, name: "John Doe", department: "Engineering" },
      { id: 2, name: "Jane Smith", department: "Marketing" }
    ]
  };
}
