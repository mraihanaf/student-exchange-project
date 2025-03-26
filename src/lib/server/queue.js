import Queue from "queue";

const queue = new Queue({ concurrency: 1, autostart: true });

queue.addEventListener('success', e => {
    console.log('job finished processing:', JSON.stringify(e.detail))
    console.log('The result is:', e.detail.result)
})

// queue.addEventListener("start", () => console.log("starting job.."))

queue.addEventListener('timeout', e => {
    console.log('job timed out:', e.detail.job.toString().replace(/\n/g, ''))
    e.detail.next()
  })
export default queue
