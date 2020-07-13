package br.com.ferlin.data.vo;

import java.io.Serializable;
import java.util.Date;

public class StateVO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Integer id;

	private String abbreviation;
	private String name;
	private Date lastUpdate;	
	
	public StateVO() {
	}
	
	public StateVO(String abbreviation, String name) {
		this.abbreviation = abbreviation;
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAbbreviation() {
		return abbreviation;
	}

	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	
}