package me.simulatan.feuerwehr.backend.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;

@Entity
public class Station extends PanacheEntity {
	public String name;
}
