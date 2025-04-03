package me.simulatan.feuerwehr.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import me.simulatan.feuerwehr.backend.model.RadioMessage;

import java.util.List;

public record IncidentWithRadioMessagesDTO(
	Long id,
	String description,
	Byte level,
	@JsonIgnoreProperties("incident")
	List<RadioMessage> radioMessages
) {}
