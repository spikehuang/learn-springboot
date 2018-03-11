package com.spike.controller;

import org.springframework.boot.SpringApplication;

public class Application {

    public static void main(String[] args) throws Exception {
        //通过SpringApplication的run()方法启动应用，无需额外的配置其他的文件
        SpringApplication.run(SpringController.class, args);
    }
}
