# React Memory Leak Bug
This repository demonstrates a common memory leak bug in React components that use the `useEffect` hook with `setTimeout`.  The bug occurs when the component unmounts before the `setTimeout` callback is executed. This results in memory not being released, and can cause performance issues in your app, especially with frequent component mounting/unmounting.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the component; you'll see a counter incrementing every second.
5. Navigate away from the component or refresh the page.  The `setTimeout` might continue running in the background, creating a memory leak.

## Solution
The solution involves ensuring that any asynchronous operations started within `useEffect` are cleaned up when the component unmounts. This is achieved using the return value of `useEffect`, which acts as a cleanup function.