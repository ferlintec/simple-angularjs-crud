package br.com.ferlintec.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StateServices_Test {

	@Test
	public void test() {
		
	}
	
//	@Autowired
//	private StateServices service;
	
//	@MockBean
//	private StateRepository repository;
	

	//Caso não ocorra a exeção esperada, este objeto acusará o erro.
//	@Rule
//	public ExpectedException thrown  = ExpectedException.none();
//
//	@Test
//	public void cretaNewState() {
//
//		
//		StateVO vo = new StateVO("SC", "Santa Catarina");
//		
//		State entity = new State("SC", "Santa Catarina");
//		entity.setId(1);
//		 
//		Mockito.when(repository.save(entity)).thenReturn(entity);
//		
//		Assertions.assertThat(service.create(vo).getId()).isNotNull();
//	}
//	
//	@Test
//	public void isSimianDNASimian() {
//
//		String [] dna = {"CTGAGA", "CTGAGC", "TATTGT", "AGAGGG", "CCCCTA", "TCACTG"};
//		
//		Mockito.when(repository.findByHashCode(Mockito.anyInt())).thenReturn(null);
//		
//		Assertions.assertThat(service.isSimian(dna)).isTrue();
//	}
//	
//	@Test
//	public void isSimianDNAHumano() {
//		String [] dna = {"ACTG", "TACG", "CTGC", "AGCT"};
//
//		Mockito.when(repository.findByHashCode(Mockito.anyInt())).thenReturn(null);
//		
//		Assertions.assertThat(service.isSimian(dna)).isFalse();
//	}
//	
//    @Test
//    public void isSimianDnaMatrizNaoQuadradaTest() {
//    	
//    	thrown.expect(InvalidDNAException.class);
//    	
//    	Mockito.when(repository.findByHashCode(Mockito.anyInt())).thenReturn(null);
//    	
//    	String [] dna = {"CTGAGA", "CTGAGC", "TATTGT", "AGAGGG", "CCCCTA", "AT"};
//			
//		service.isSimian(dna);
//    }
//    
//    @Test
//    public void isSimianDnaLetraErradaTest() {
//    	
//    	thrown.expect(InvalidDNAException.class);
//    	
//    	Mockito.when(repository.findByHashCode(Mockito.anyInt())).thenReturn(null);
//    	
//    	String [] dna = {"WWWW", "AAAA", "TTTT", "GGGG"};
//			
//		service.isSimian(dna);
//    }
//    
//    @Test
//    public void getStatsOK() {
//    	
//    	Mockito.when(repository.countMutantDna()).thenReturn(5);
//    	Mockito.when(repository.countHumanDna()).thenReturn(2);
//
//    	Assertions.assertThat(service.getStats().getRatio()).isEqualTo(2.5);
//    	
//    }
}
