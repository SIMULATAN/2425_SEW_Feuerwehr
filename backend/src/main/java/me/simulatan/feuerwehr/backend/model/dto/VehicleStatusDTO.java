package me.simulatan.feuerwehr.backend.model.dto;

import jakarta.annotation.Nullable;

public record VehicleStatusDTO(
	Long vehicleId,
	Byte radioCode,
	@Nullable Long incidentId
) {}
