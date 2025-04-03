package me.simulatan.feuerwehr.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "radio_message")
public class RadioMessage extends PanacheEntityBase {
	@Id
	@GeneratedValue()
	public Long id;
	@ManyToOne(optional = false)
	@JsonIgnoreProperties("radioMessages")
	public Vehicle vehicle;
	@ManyToOne(optional = false)
	@JoinColumn(name = "code", nullable = false)
	public RadioCode code;
	public Instant timestamp;
	@ManyToOne(optional = true)
	public Incident incident;
}
