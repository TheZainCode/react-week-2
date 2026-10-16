import { useState, useCallback, memo } from "react";

const Child = memo(({ onAction }) => {
  console.log("👶 Child rendered!");
  
  return (
    <div className="p-4 bg-gray-50 border rounded-md mt-4 space-y-2">
      <p className="text-sm font-medium text-gray-700">I am the Child Component</p>
      <button
        onClick={onAction}
        className="px-3 py-1 bg-green-600 text-white rounded text-sm cursor-pointer hover:bg-green-500"
      >
        Trigger Child Action
      </button>
    </div>
  );
});
// 2️⃣ Parent Component
function RenderDemo() {
  const [count, setCount] = useState(0);
  const handleChildAction = useCallback(() => {
    console.log("🔥 Child action clicked");
  }, []); 

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">useCallback & React.memo Demo</h2>
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
        <p className="text-lg font-semibold">Parent Count: {count}</p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-500"
        >
          Increase Parent Count
        </button>
      </div>
      <Child onAction={handleChildAction} />
    </div>
  );
}

export default RenderDemo;