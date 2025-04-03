package me.simulatan.feuerwehr.backend.resource;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import me.simulatan.feuerwehr.backend.model.*;
import me.simulatan.feuerwehr.backend.model.dto.VehicleStatusDTO;

import java.time.Instant;
import java.util.List;

@Path("radio-messages")
public class RadioMessageResource {
	@GET
	@Path("codes")
	public List<RadioCode> getCodes() {
		return RadioCode.findAll().list();
	}

	@POST
	@Transactional
	public void sendVehicleStatus(VehicleStatusDTO vehicleStatusDTO) {
		var message = new RadioMessage();
		message.code = RadioCode.findById(vehicleStatusDTO.radioCode());
		message.vehicle = Vehicle.findById(vehicleStatusDTO.vehicleId());
		message.timestamp = Instant.now();
		message.vehicle = Vehicle.findById(vehicleStatusDTO.vehicleId());
		Long incidentId = vehicleStatusDTO.incidentId();
		if (incidentId != null) message.incident = Incident.findById(incidentId);

		message.persist();

		VehicleWebsocket.broadcastRadioMessage(message.vehicle, message);
		if (message.incident != null) IncidentWebsocket.broadcastRadioMessage(message.incident, message);
	}
}
