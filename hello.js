import { pow2 } from "/pow2.js"
import { qsa } from "/qsa.js"
import { wait } from "/wait.js"

console.log("hello")
console.log(qsa("body"))
console.log(pow2(1), pow2(2), pow2(3), pow2(4), pow2(5))
wait(1000).then(() => {
 console.log(qsa("body"))
})
