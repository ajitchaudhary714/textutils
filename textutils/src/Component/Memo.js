import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
        console.log("multiCountMemo")
      return count * 5;
    },
    [count]
  );

  return (
    <>
      <h1> use memo hook in react js</h1>
      <h4>Count : {count}</h4>
      <h4>Item : {item}</h4>
      <h4> {multiCountMemo}</h4>

      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </>
  );
}

export default Memo;
