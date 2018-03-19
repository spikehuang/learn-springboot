package com.spike.controller;

import com.spike.dao.EndecryptTaskMapper;
import com.spike.model.EndecryptTask;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value = "/endecrypt/task", consumes = "application/json;charset=utf-8")
    public int saveEndecryptTask(@RequestBody EndecryptTask endecryptTask) {

        return endecryptTaskMapper.saveEndecryptTask(endecryptTask);
    }

    @DeleteMapping(value = "/endecrypt/task/{taskId}")
    public int removeEndecryptTaskByTaskId(@PathVariable("taskId") String taskId) {

        return endecryptTaskMapper.removeEndecryptTaskByTaskId(taskId);
    }

    @PutMapping(value = "/endecrypt/task", consumes = "application/json;charset=utf-8")
    public int updateEndecryptTaskByTaskId(@RequestBody EndecryptTask endecryptTask) {

        return endecryptTaskMapper.updateEndecryptTaskByTaskId(endecryptTask);
    }
}
