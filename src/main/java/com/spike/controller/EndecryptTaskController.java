package com.spike.controller;

import com.spike.dao.EndecryptTaskMapper;
import com.spike.model.EndecryptTask;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EndecryptTaskController {

    @Autowired
    private EndecryptTaskMapper endecryptTaskMapper;

    @GetMapping("/endecrypt/tasks")
    public EndecryptTask listEndecryptTasks() {
        return null;
    }
}
