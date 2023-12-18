db.encounters.insertOne({
    "patientId": ObjectId("patient_id"),
    "dateTime": ISODate("EncounterDateTime"),
    "type": "Emergency/OPD/SpecialistCare"
  });


  db.vitals.insertOne({
    "patientId": ObjectId("patient_id"),
    "bloodPressure": "120/80",
    "temperature": 98.6,
    "pulse": 75,
    "spo2": 98
  });

  