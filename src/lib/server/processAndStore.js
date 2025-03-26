import queue from "./queue"
import reports from "$db/reports"
import { processRawReport } from "$aws/llm"

export default function processAndStore(text) {
    queue.push(async cb => {
        const res = await processRawReport(text)
        cb(null, res)
    })
}