package com.spike.model;

import java.util.Date;

public class EndecryptTask {

    private String taskId;

    private String type;

    private String inputInfo;

    private String outputInfo;

    private String enabled;

    private String createTime;

    private String updateTime;

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getInputInfo() {
        return inputInfo;
    }

    public void setInputInfo(String inputInfo) {
        this.inputInfo = inputInfo;
    }

    public String getOutputInfo() {
        return outputInfo;
    }

    public void setOutputInfo(String outputInfo) {
        this.outputInfo = outputInfo;
    }

    public String getEnabled() {
        return enabled;
    }

    public void setEnabled(String enabled) {
        this.enabled = enabled;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }
}
