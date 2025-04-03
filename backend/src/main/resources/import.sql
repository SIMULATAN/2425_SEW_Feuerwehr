-- Insert into station
INSERT INTO station (id, name) VALUES (1, 'FF Linz');
INSERT INTO station (id, name) VALUES (2, 'FF Wels');
INSERT INTO station (id, name) VALUES (3, 'FF Steyr');
INSERT INTO station (id, name) VALUES (4, 'FF Gmunden');
INSERT INTO station (id, name) VALUES (5, 'FF Vöcklabruck');

-- Insert into vehicle
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (1, 'RLF-A 2000', 'RÜST LINZ', 1);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (2, 'TLF-A 4000', 'TANK WELS', 2);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (3, 'KDOF', 'KDO STEYR', 3);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (4, 'MTF', 'MTF GMUNDEN', 4);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (5, 'LF-A', 'PUMPE VÖCKLABRUCK', 5);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (6, 'SRF', 'RÜST LINZ 2', 1);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (7, 'TLFA 3000', 'TANK WELS 2', 2);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (8, 'KRF-S', 'KRF STEYR', 3);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (9, 'WLF', 'LAST GMUNDEN', 4);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (10, 'HLF 2', 'PUMPE VÖCKLABRUCK 2', 5);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (11, 'LF-B', 'PUMPE LINZ', 1);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (12, 'VRF', 'VRF WELS', 2);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (13, 'KDO', 'KDO STEYR 2', 3);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (14, 'RLF', 'RÜST GMUNDEN', 4);
INSERT INTO vehicle (id, type, call_sign, station_id) VALUES (15, 'MTFA', 'MTF VÖCKLABRUCK', 5);

-- Insert into radio_code
INSERT INTO radio_code (number, name) VALUES (0, 'AUSSER DIENST');
INSERT INTO radio_code (number, name) VALUES (1, 'FREI WACHE');
INSERT INTO radio_code (number, name) VALUES (2, 'FREI FUNK');
INSERT INTO radio_code (number, name) VALUES (3, 'AUSFAHRT');
INSERT INTO radio_code (number, name) VALUES (4, 'AM EINSATZORT');
INSERT INTO radio_code (number, name) VALUES (5, 'SPRECHWUNSCH');
INSERT INTO radio_code (number, name) VALUES (6, 'ALARMIERUNGSAUFTRAG');

-- Insert into incident
INSERT INTO incident (id, description, level, open) VALUES (1, 'Building fire in city center', 2, true);
INSERT INTO incident (id, description, level, open) VALUES (2, 'Car accident on highway', 1, true);
INSERT INTO incident (id, description, level, open) VALUES (3, 'Flooding in basement', 0, false);

-- Insert into radio_message
-- Incident 1
INSERT INTO radio_message (id, vehicle_id, code, timestamp, incident_id) VALUES (NEXT VALUE FOR radio_message_seq, 1, 3, '2025-03-28 08:15:00', 1);
INSERT INTO radio_message (id, vehicle_id, code, timestamp, incident_id) VALUES (NEXT VALUE FOR radio_message_seq, 2, 4, '2025-03-28 08:20:00', 1);
INSERT INTO radio_message (id, vehicle_id, code, timestamp, incident_id) VALUES (NEXT VALUE FOR radio_message_seq, 3, 6, '2025-03-28 08:30:00', 1);
INSERT INTO radio_message (id, vehicle_id, code, timestamp) VALUES (NEXT VALUE FOR radio_message_seq, 2, '2025-03-28 08:45:00');
INSERT INTO radio_message (id, vehicle_id, code, timestamp) VALUES (NEXT VALUE FOR radio_message_seq, 1, '2025-03-28 09:00:00');

-- Incident 2
INSERT INTO radio_message (id, vehicle_id, code, timestamp, incident_id) VALUES (NEXT VALUE FOR radio_message_seq, 6, 3, '2025-03-28 09:15:00', 2);
INSERT INTO radio_message (id, vehicle_id, code, timestamp, incident_id) VALUES (NEXT VALUE FOR radio_message_seq, 7, 4, '2025-03-28 09:20:00', 2);
INSERT INTO radio_message (id, vehicle_id, code, timestamp, incident_id) VALUES (NEXT VALUE FOR radio_message_seq, 8, 5, '2025-03-28 09:30:00', 2);
INSERT INTO radio_message (id, vehicle_id, code, timestamp) VALUES (NEXT VALUE FOR radio_message_seq, 9, 2, '2025-03-28 09:45:00',);
INSERT INTO radio_message (id, vehicle_id, code, timestamp) VALUES (NEXT VALUE FOR radio_message_seq, 10, 1, '2025-03-28 10:00:00');

-- Incident 3
INSERT INTO radio_message (id, vehicle_id, code, timestamp, incident_id) VALUES (NEXT VALUE FOR radio_message_seq, 11, 3, '2025-03-28 10:15:00', 3);
INSERT INTO radio_message (id, vehicle_id, code, timestamp, incident_id) VALUES (NEXT VALUE FOR radio_message_seq, 12, 4, '2025-03-28 10:20:00', 3);
INSERT INTO radio_message (id, vehicle_id, code, timestamp) VALUES (NEXT VALUE FOR radio_message_seq, 13, 2, '2025-03-28 10:30:00');
INSERT INTO radio_message (id, vehicle_id, code, timestamp) VALUES (NEXT VALUE FOR radio_message_seq, 14, 1, '2025-03-28 10:45:00');
