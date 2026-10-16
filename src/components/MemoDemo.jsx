import { useState, useMemo } from "react";
function MemoDemo() {
  const [count, setCount] = useState(0);
    const totalSum = useMemo(() => {
  console.log("Expensive Calculation Running");

  const numbers = Array.from(
    { length: 1000 },
    (_, index) => index + 1
  );

  return numbers.reduce((sum, number) => sum + number, 0);
}, []); 
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">useMemo Demo</h2>

      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold">Counter: {count}</p>
        <button 
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-500"
        >
          Increase Counter
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md">
        <p className="text-lg font-medium">Sum of 1 to 1000:</p>
        <p className="text-2xl font-bold text-green-600">{totalSum}</p>
      </div>
    </div>
  );
}

export default MemoDemo;