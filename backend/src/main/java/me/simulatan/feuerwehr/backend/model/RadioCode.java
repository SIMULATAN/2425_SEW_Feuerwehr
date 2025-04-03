package me.simulatan.feuerwehr.backend.model;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "radio_code")
public class RadioCode extends PanacheEntityBase {
	@Id
	public Byte number;
	public String name;
}
