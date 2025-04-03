package me.simulatan.feuerwehr.backend.model.dto;

import me.simulatan.feuerwehr.backend.model.RadioMessage;
import me.simulatan.feuerwehr.backend.model.Station;

public record VehicleDTO(
	Long id,
	Station station,
	String type,
	String callSign,
	RadioMessage lastRadioMessage
) {
}
