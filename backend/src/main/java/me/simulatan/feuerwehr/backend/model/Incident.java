package me.simulatan.feuerwehr.backend.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;

@Entity
public class Incident extends PanacheEntity {
	public String description;
	public Byte level;

	public Boolean open;
}
