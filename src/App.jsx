import StudentCard from './components/StudentCard.jsx';
import Counter from './components/Counter.jsx';

function App() {
  return (
    <main className="page">
      <StudentCard
        name="Basit"
        course="Computer Science"
        level="300"
      />
      <br />
      <Counter/>
    </main>
  );
}

export default App;
