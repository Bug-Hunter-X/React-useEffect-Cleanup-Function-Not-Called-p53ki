```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldMount, setShouldMount] = useState(true);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect ran with count:', count);
    return () => {
      console.log('Cleanup function ran');
    };
  }, [count]); // Add count to the dependency array

  return (
    <div>
      {shouldMount && (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <button onClick={() => setShouldMount(false)}>Unmount</button>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
```