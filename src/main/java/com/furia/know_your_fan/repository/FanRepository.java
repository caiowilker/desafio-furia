package com.furia.know_your_fan.repository;

import com.furia.know_your_fan.model.Fan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FanRepository extends JpaRepository<Fan, Long> {
}
