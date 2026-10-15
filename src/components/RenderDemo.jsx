import { memo, useState } from "react";
function RenderDemo() {
    const [count, setCount]=useState(0);
    return(
        <>
        <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Increment</button>
        <p>Count: {count}</p>
        <Child />
        </>
    )
}
const Child=memo(function Child(){
    console.log("Child rendered");
    return <p>I am the child component</p>
})
export default RenderDemo;