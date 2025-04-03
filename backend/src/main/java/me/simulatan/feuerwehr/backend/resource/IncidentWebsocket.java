package me.simulatan.feuerwehr.backend.resource;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import me.simulatan.feuerwehr.backend.model.Incident;
import me.simulatan.feuerwehr.backend.model.RadioMessage;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static me.simulatan.feuerwehr.backend.resource.WebsocketUtils.broadcastMessage;

@ServerEndpoint("/incidents/{id}/ws")
@ApplicationScoped
public class IncidentWebsocket {
	private static final Map<Long, List<Session>> sessions = new ConcurrentHashMap<>();


	@OnOpen
	public void onOpen(Session session, @PathParam("id") Long incidentId) {
		sessions.computeIfAbsent(incidentId, k -> new ArrayList<>()).add(session);
	}


	@OnClose
	public void onClose(Session session) {
		sessions.values().forEach(s -> s.remove(session));
	}


	@OnError
	public void onError(Session session, Throwable throwable) {}


	public static void broadcastLevelChange(Incident incident) {
		broadcastMessage(sessions.get(incident.id), "LevelChange", incident.level);
	}

	public static void broadcastRadioMessage(Incident incident, RadioMessage radioMessage) {
		WebsocketUtils.broadcastRadioMessage(sessions.get(incident.id), radioMessage);
	}
}
