import {
    InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import client from "./client"

export async function processRawReport(text="Describe the purpose of a 'hello world' program in one sentence."){
    const modelId = "amazon.titan-text-premier-v1:0";
    const conversation = [
    {
        role: "user",
        content: [{ text: userMessage }],
    },];

    // Create a command with the model ID, the message, and a basic configuration.
    const command = new ConverseCommand({
     modelId,
     messages: conversation,
     inferenceConfig: { maxTokens: 512, temperature: 0.5, topP: 0.9 },
     });

    try {
        // Send the command to the model and wait for the response
        const response = await client.send(command);

        // Extract and print the response text.  
        const responseText = response.output.message.content[0].text;
        console.log(responseText);
    } catch (err) {
        console.log(`ERROR: Can't invoke '${modelId}'. Reason: ${err}`);
    }
}
