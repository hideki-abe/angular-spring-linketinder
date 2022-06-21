package com.zgheroapi.controller;

import com.zgheroapi.model.entity.Vaga;
import com.zgheroapi.model.repository.Vagas;
import com.zgheroapi.model.repository.VagasCompetencias;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/zghero/vagas")
public class VagaController {

    private Vagas repository;

    public VagaController(Vagas repository){
        this.repository = repository;
    }

    @GetMapping
    public List<Vaga> find(Vaga filtro){
        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(
                        ExampleMatcher.StringMatcher.CONTAINING );

        Example example = Example.of(filtro, matcher);
        return repository.findAll(example);
    }

}
