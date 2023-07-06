import Relogio from "./components/relogio"

function App() {
  return (
      <div>
        <Relogio dataHora={new Date()}/>
      </div>
  )
}

export default App;
