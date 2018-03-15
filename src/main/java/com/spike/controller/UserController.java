package com.spike.controller;

import com.spike.dao.UserMapper;
import com.spike.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class UserController {

    @Autowired
    UserMapper userMapper;

    @RequestMapping(value = "/cs")
    public User cs() {
        User user = userMapper.selectUserByName("Tom");
        return user;
    }

}
