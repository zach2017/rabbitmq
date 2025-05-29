package com.example.demo;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RabbitMqPublisherApplication implements CommandLineRunner {

    private static final String QUEUE_NAME = "exampleQueue";
    private static final String EXCHANGE_NAME = "exampleTopicExchange";
    private static final String ROUTING_KEY = "example.topic.message";

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public static void main(String[] args) {
        SpringApplication.run(RabbitMqPublisherApplication.class, args);
    }

    @Bean
    public Queue queue() {
        return new Queue(QUEUE_NAME, false); // Non-durable queue
    }

    @Bean
    public TopicExchange exchange() {
        return new TopicExchange(EXCHANGE_NAME);
    }

    @Bean
    public Binding binding(Queue queue, TopicExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(ROUTING_KEY);
    }

    @Override
    public void run(String... args) throws Exception {
        String message = "Hello, RabbitMQ Topic!";
        rabbitTemplate.convertAndSend(EXCHANGE_NAME, ROUTING_KEY, message);
        System.out.println("Sent message: " + message + " with routing key: " + ROUTING_KEY);
    }

    @Component
    public static class MessageConsumer {

        @RabbitListener(queues = QUEUE_NAME)
        public void receiveMessage(String message) {
            System.out.println("Received message: " + message);
        }
    }
}
