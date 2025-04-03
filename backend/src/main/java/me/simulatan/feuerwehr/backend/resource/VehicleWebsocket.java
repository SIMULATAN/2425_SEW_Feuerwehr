package me.simulatan.feuerwehr.backend.resource;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import me.simulatan.feuerwehr.backend.model.RadioMessage;
import me.simulatan.feuerwehr.backend.model.Vehicle;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint("/vehicles/{id}/ws")
@ApplicationScoped
public class VehicleWebsocket {
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

	public static void broadcastRadioMessage(Vehicle vehicle, RadioMessage radioMessage) {
		WebsocketUtils.broadcastRadioMessage(sessions.get(vehicle.id), radioMessage);
	}
}
