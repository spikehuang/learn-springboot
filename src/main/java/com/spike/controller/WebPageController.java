package com.spike.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

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

    @RequestMapping("/task/update")
    String taskUpdate(HttpServletRequest request, ModelMap map) {
        String taskId = request.getParameter("taskId");
        map.put("taskId", taskId);
        return "/taskUpdateForm";
    }

}
