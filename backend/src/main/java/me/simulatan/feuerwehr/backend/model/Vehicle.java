package me.simulatan.feuerwehr.backend.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Vehicle extends PanacheEntity {
	public String type;
	@Column(name = "call_sign")
	public String callSign;
	@ManyToOne
	public Station station;
	@OneToMany(mappedBy = "vehicle")
	public List<RadioMessage> radioMessages;
}
