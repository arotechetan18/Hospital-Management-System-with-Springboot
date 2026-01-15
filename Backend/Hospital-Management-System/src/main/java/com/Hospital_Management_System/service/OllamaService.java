package com.Hospital_Management_System.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OllamaService {

    private final RestTemplate restTemplate;

    public OllamaService() {
        this.restTemplate = new RestTemplate();
    }

    private static final String OLLAMA_URL = "http://localhost:11434/api/generate";

    public String getAiReply(String message) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = new HashMap<>();
            body.put("model", "phi3");
            body.put("prompt",
            	    "You are a hospital assistant. " +
            	    "Answer the question in **simple English** only. " +
            	    "Keep your answer short and concise, maximum 10 lines. " +
            	    "Question: " + message);


            body.put("stream", false);

            HttpEntity<Map<String, Object>> request =
                    new HttpEntity<>(body, headers);

            ResponseEntity<Map> response =
                    restTemplate.postForEntity(OLLAMA_URL, request, Map.class);

            if (response.getBody() != null && response.getBody().get("response") != null) {
                return response.getBody().get("response").toString();
            }

            return "No response from AI";

        } catch (Exception e) {
            return "AI is busy. Please try again after some time.";
        }
    }
}
