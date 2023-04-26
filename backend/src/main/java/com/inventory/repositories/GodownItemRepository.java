package com.inventory.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inventory.entities.GodownItem;

public interface GodownItemRepository extends JpaRepository<GodownItem, Integer>{

}