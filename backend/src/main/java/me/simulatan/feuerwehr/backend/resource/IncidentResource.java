package me.simulatan.feuerwehr.backend.resource;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import me.simulatan.feuerwehr.backend.model.Incident;
import me.simulatan.feuerwehr.backend.model.RadioMessage;
import me.simulatan.feuerwehr.backend.model.dto.IncidentWithRadioMessagesDTO;

import java.util.List;

@Path("/incidents")
public class IncidentResource {
	@GET
	@Path("open")
	public List<Incident> getOpenIncidents() {
		return Incident.getEntityManager()
			.createQuery("SELECT i FROM Incident i WHERE i.open = true", Incident.class)
			.getResultList();
	}

	@GET
	@Path("{id}")
	public IncidentWithRadioMessagesDTO getIncident(@PathParam("id") Long id) {
		var incident = Incident.<Incident>findById(id);

		var messages = RadioMessage.getEntityManager()
			.createQuery("SELECT rm FROM RadioMessage rm WHERE rm.incident.id = :id", RadioMessage.class)
			.setParameter("id", incident.id)
			.getResultList();

		return new IncidentWithRadioMessagesDTO(
			incident.id,
			incident.description,
			incident.level,
			messages
		);
	}
}
