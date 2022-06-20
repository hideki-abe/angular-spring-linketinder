package com.example.zgheroapi.model.repository;

import com.example.zgheroapi.model.entity.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Empresas extends JpaRepository<Empresa, Integer> {

}
