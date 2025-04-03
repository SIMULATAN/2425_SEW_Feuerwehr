package me.simulatan.feuerwehr.backend.resource;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import me.simulatan.feuerwehr.backend.model.Incident;
import me.simulatan.feuerwehr.backend.model.RadioMessage;
import me.simulatan.feuerwehr.backend.model.Vehicle;
import me.simulatan.feuerwehr.backend.model.dto.IncidentWithRadioMessagesDTO;
import me.simulatan.feuerwehr.backend.model.dto.VehicleDTO;

import java.util.List;

@Path("/vehicles")
public class VehicleResource {
	@GET
	public List<VehicleDTO> getVehicles() {
		return Incident.getEntityManager()
			.createQuery("SELECT NEW me.simulatan.feuerwehr.backend.model.dto.VehicleDTO(i.id, i.station, i.type, i.callSign, rm) FROM Vehicle i INNER JOIN RadioMessage rm ON rm.vehicle = i WHERE rm.timestamp = (SELECT MAX(rm2.timestamp) FROM RadioMessage rm2 WHERE rm2.vehicle = i)", VehicleDTO.class)
			.getResultList();
	}

	@GET
	@Path("{id}")
	public Vehicle getVehicle(@PathParam("id") Long id) {
		return Vehicle.findById(id);
	}
}
