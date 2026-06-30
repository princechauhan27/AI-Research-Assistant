package com.research.assistant;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/assistant")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class ResearchController {
    private final ResearchService researchService;

    @PostMapping("/post")
    public ResponseEntity<String> processContent(@RequestBody ResearchRequest request) {
        String result = researchService.processContent(request);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/get")
    public String welcome() {
        return "AI Powered Research Assistant is running!";
    }
}