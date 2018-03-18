package com.spike.controller;

import com.spike.dao.EndecryptTaskMapper;
import com.spike.model.EndecryptTask;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EndecryptTaskController {

    @Autowired
    private EndecryptTaskMapper endecryptTaskMapper;

    @GetMapping("/endecrypt/tasks")
    public List<EndecryptTask> listEndecryptTasks() {

        return endecryptTaskMapper.listEndecryptTasks();
    }

    @GetMapping("/endecrypt/task/{taskId}")
    public EndecryptTask getEndecryptTask(@PathVariable("taskId") String taskId) {

        return endecryptTaskMapper.getEndecryptTask(taskId);
    }
}
