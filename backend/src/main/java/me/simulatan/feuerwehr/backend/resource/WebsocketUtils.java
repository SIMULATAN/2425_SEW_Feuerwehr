package me.simulatan.feuerwehr.backend.resource;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.websocket.Session;
import me.simulatan.feuerwehr.backend.model.RadioMessage;

import java.util.List;

public class WebsocketUtils {
	public static void broadcastRadioMessage(List<Session> sessions, RadioMessage radioMessage) {
		broadcastMessage(sessions, "RadioMessage", radioMessage);
	}

	private static final ObjectMapper objectMapper = new ObjectMapper();
	static {
		objectMapper.registerModule(new JavaTimeModule());
	}

	static void broadcastMessage(List<Session> sessions, String type, Object data) {
		if (sessions == null) return;
		try {
			String dataString = objectMapper.writeValueAsString(data);
			String message = "{\"type\": \"" + type + "\", \"data\": " + dataString + "}";

			for (Session currSession : sessions) {
				currSession.getAsyncRemote().sendText(message);
			}
		} catch (JsonProcessingException e) {
			System.out.println("Exception occurred in broadcastMessage: " + e);
		}
	}
}
