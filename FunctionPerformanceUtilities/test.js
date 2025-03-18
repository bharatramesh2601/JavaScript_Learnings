import { PerformanceUtils } from "./index.js";

// Example Function
function expensiveFunction(x) {
  console.log("Running expensive function...");
  return x * x;
}

// ✅ Test Memoization
const memoizedExpensiveFunction = PerformanceUtils.memoize(expensiveFunction);
console.log(memoizedExpensiveFunction(10)); // Runs function
console.log(memoizedExpensiveFunction(10)); // Uses cache

// ✅ Test Debounce
const debouncedLog = PerformanceUtils.debounce(() => console.log("Debounced!"), 500);
debouncedLog();
debouncedLog();
debouncedLog(); // Only the last call runs after 500ms

// ✅ Test Throttle
const throttledLog = PerformanceUtils.throttle(() => console.log("Throttled!"), 1000);
setInterval(throttledLog, 100); // Runs only once per second

// ✅ Test Performance Measurement
PerformanceUtils.measurePerformance(expensiveFunction, 1000000);
