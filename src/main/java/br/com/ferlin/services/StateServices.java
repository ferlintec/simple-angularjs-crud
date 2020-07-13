package br.com.ferlin.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ferlin.converter.DozerConverter;
import br.com.ferlin.data.model.State;
import br.com.ferlin.data.vo.StateVO;
import br.com.ferlin.exception.ResourceNotFoundException;
import br.com.ferlin.repository.StateRepository;

@Service
public class StateServices {
	
	@Autowired
	StateRepository repository;
		
	public StateVO create(StateVO state) {
		State entity = DozerConverter.parseObject(state, State.class);
		entity.setLastUpdate(new Date());
		StateVO vo = DozerConverter.parseObject(repository.save(entity), StateVO.class);
		return vo;
	}
	
	public List<StateVO> findAll() {
		return DozerConverter.parseListObjects(repository.findAll(), StateVO.class);
	}	
	
	public StateVO findById(Integer id) {

		State entity = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
		return DozerConverter.parseObject(entity, StateVO.class);
	}
		
	public StateVO update(StateVO state) {
		State entity = repository.findById(state.getId())
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
		
		entity.setAbbreviation(state.getAbbreviation());
		entity.setName(state.getName());
		entity.setLastUpdate(new Date());
		
		StateVO vo = DozerConverter.parseObject(repository.save(entity), StateVO.class);
		return vo;
	}	
	
	public void delete(Integer id) {
		State entity = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
		repository.delete(entity);
	}

}
