package com.spike.dao;

import com.spike.model.EndecryptTask;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EndecryptTaskMapper {

    List<EndecryptTask> listEndecryptTasks();
}
