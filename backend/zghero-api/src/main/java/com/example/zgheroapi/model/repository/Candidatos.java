package com.example.zgheroapi.model.repository;


import com.example.zgheroapi.model.entity.Candidato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Candidatos extends JpaRepository<Candidato, Integer> {

}
