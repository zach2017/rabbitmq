package com.example.demo;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.amqp.core.Queue;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    private static final String QUEUE_NAME = "exampleQueue";

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public Queue queue() {
        return new Queue(QUEUE_NAME, false);
    }

    @Override
    public void run(String... args) throws Exception {
        String message = "Hello, RabbitMQ!";
        rabbitTemplate.convertAndSend(QUEUE_NAME, message);
        System.out.println("Sent message: " + message);
    }

	@Component
    public static class MessageConsumer {

        @RabbitListener(queues = QUEUE_NAME)
        public void receiveMessage(String message) {
            System.out.println("Received message: " + message);
        }
    }
}