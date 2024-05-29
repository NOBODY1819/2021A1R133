import { Routes, Route } from 'react-router-dom';
import AverageCalculator from './components/averagecalculator';
import './App.css'

function App() {
    <Routes>
    <Route path="/number/" element={<AverageCalculator/>} />
    <Route path="*" component={() => <h1>404 Not Found</h1>} />
  </Routes>
}

export default App
