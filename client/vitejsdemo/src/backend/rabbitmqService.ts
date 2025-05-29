// Simulate RabbitMQ queue call
export function fetchFromRabbitMQ() {
  return {
    source: "RabbitMQ",
    data: [
      { messageId: "msg1", payload: "Hello from queue 1" },
      { messageId: "msg2", payload: "Hello from queue 2" }
    ]
  };
}
