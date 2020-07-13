package br.com.ferlin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ferlin.data.vo.StateVO;
import br.com.ferlin.services.StateServices;

@RestController
@RequestMapping("/state")
public class StateController {
	
	@Autowired
	private StateServices service;
	
	@GetMapping
	public List<StateVO> findAll() {
		
		return service.findAll();
	}	
	
	@GetMapping("/{id}")
	public StateVO findById(@PathVariable("id") Integer id) {
		return service.findById(id);
	}	
	
	@PostMapping
	public StateVO create(@RequestBody StateVO state) {
		return service.create(state);
	}
	
	@PutMapping
	public StateVO update(@RequestBody StateVO state) {
		return service.update(state);
	}	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
		service.delete(id);
		return ResponseEntity.ok().build();
	}	
	
}