export function sleep(delay: number | undefined) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), delay);
  });
}
