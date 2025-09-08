// 태스크 큐, 마이크로 태스크 큐
// 태스크 큐
// setTimeout, setInterval, setImmediate, DOM 이벤트 콜백, fetch().then().catch().finally

// 마이크로 태스크큐
// Promise.then, catch, finally
// MutationObserver

console.log('a');

// 콜스택 -> 웹 API -> 태스크큐 -> 이벤트 루프 -> b 출력
setTimeout(() => {
  console.log('b');
}, 0);


// 콜스택 -> 웹API -> 마이크로 태스크큐 -> 이벤트루프 -> 콜스택 -> 웹API -> 
// 태스크큐 -> 이벤트루프 -> 콜스택 -> c 출력
new Promise((resolve) => resolve()).then(() => {
  setTimeout(() => {
    console.log('c');
  }, 0);
});
console.log('d');
