export function measurePerformance(fn, ...args) {
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  console.log(`Execution Time for ${fn.name}: ${(end - start).toFixed(4)} ms`);
  return result;
}
