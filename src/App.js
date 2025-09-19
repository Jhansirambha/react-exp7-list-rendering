

const students = ["Alice", "Bob", "Charlie"];
function App() {
  return <ul>{students.map((s,i) => <li key={i}>{s}</li>)}</ul>;
}
export default App;

