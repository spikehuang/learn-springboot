package com.spike.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebPageController {

    @RequestMapping("/task")
    String task() {
        return "/task";
    }

    @RequestMapping("/task/insert")
    String taskInsert() {
        return "/taskForm";
    }
}
