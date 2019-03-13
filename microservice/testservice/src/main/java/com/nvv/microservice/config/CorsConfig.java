package com.nvv.microservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Enables Cross-Origin Resource Sharing (CORS) | MDN for all requests.
 * // https://www.baeldung.com/spring-cors
 * Another option is to do this in java script
 * https://itnext.io/cors-understanding-it-practically-9c401ed818cd
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    // Allow any origin.
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            // This is done to allow options
            .allowedMethods("PUT", "DELETE", "GET", "POST", "OPTIONS");
    }
}