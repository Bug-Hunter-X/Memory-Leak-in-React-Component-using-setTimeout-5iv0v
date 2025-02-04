```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId;
    // Assign the timeout ID to a variable that can be accessed in the cleanup function
    timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```