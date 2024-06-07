package com.ebooklib.bookstore.config;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @SuppressWarnings("deprecation")
	@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable() // Disable CSRF for simplicity, not recommended for production
            .authorizeRequests(authorizeRequests ->authorizeRequests.requestMatchers("/api/books/**").permitAll() // Permit all requests to /api/books
                    .anyRequest().authenticated()
            );
        return http.build();
    }
}

