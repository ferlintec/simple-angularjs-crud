package br.com.ferlin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ferlin.data.model.State;

@Repository
public interface StateRepository extends JpaRepository<State, Integer>{

}