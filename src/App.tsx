import { useState } from "react";
import { convertApi } from "./Service";
import "./App.css";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConvert = async () => {
    setError(null);
    setResult(null);

    if (!from || !to || !amount) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await convertApi(from, to, amount);
      setResult(response.data);
    } catch (e) {
      setError("Conversion failed. Please try again.");
      console.error(e);
    }
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <a href="https://en.wikipedia.org/wiki/ISO_4217" target="blank">Click here for Currency codes</a>
      <div className="form">
        <div>
          <label>From Currency:</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value.toUpperCase())}
            placeholder="e.g., USD"
          />
        </div>
        <div>
          <label>To Currency:</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value.toUpperCase())}
            placeholder="e.g., EUR"
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 100"
          />
        </div>
        <button onClick={handleConvert}>Convert</button>
      </div>
      {result && <p>Conversion Result: {result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
