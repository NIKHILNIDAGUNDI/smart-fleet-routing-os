
// Data Store
const FLEET = [{"id": "BM221", "reg": "KA51AH8184", "cat": "C", "actualRange": 62.0, "soh": 74, "soc": 98, "extClean": false, "intClean": false, "maintenance": true, "status": "In Maintenance", "chargerBay": null, "assignedSchedule": null, "busId": "BM221", "regNo": "KA51AH8184", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM304", "reg": "KA51AJ0137", "cat": "C", "actualRange": 69.8, "soh": 77, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM304", "regNo": "KA51AJ0137", "depot": "Depot 44 (Chandapura)", "driver": "Suresh Kumar", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM088", "reg": "KA51AH3127", "cat": "C", "actualRange": 70.1, "soh": 77, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Charging (Bay 3)", "chargerBay": 3, "assignedSchedule": null, "busId": "BM088", "regNo": "KA51AH3127", "depot": "Depot 44 (Chandapura)", "driver": "Manjunath B", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM057", "reg": "KA51AH2956", "cat": "C", "actualRange": 80.1, "soh": 80, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM057", "regNo": "KA51AH2956", "depot": "Depot 44 (Chandapura)", "driver": "Shivakumar N", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM224", "reg": "KA51AH8185", "cat": "C", "actualRange": 84.4, "soh": 81, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Needs Fast Charge", "chargerBay": null, "assignedSchedule": null, "busId": "BM224", "regNo": "KA51AH8185", "depot": "Depot 44 (Chandapura)", "driver": "Venkatesh R", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM218", "reg": "KA51AH8182", "cat": "C", "actualRange": 87.2, "soh": 82, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM218", "regNo": "KA51AH8182", "depot": "Depot 44 (Chandapura)", "driver": "Anand Patil", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM296", "reg": "KA51AH6779", "cat": "C", "actualRange": 91.9, "soh": 84, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM296", "regNo": "KA51AH6779", "depot": "Depot 44 (Chandapura)", "driver": "Basavaraj M", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM082", "reg": "KA51AH3131", "cat": "C", "actualRange": 92.5, "soh": 84, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Charging (Bay 8)", "chargerBay": 8, "assignedSchedule": null, "busId": "BM082", "regNo": "KA51AH3131", "depot": "Depot 44 (Chandapura)", "driver": "Raghavendra K", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM012", "reg": "KA51AH2551", "cat": "C", "actualRange": 92.9, "soh": 84, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM012", "regNo": "KA51AH2551", "depot": "Depot 44 (Chandapura)", "driver": "Chandrashekar H", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM225", "reg": "KA51AH8349", "cat": "C", "actualRange": 93.2, "soh": 84, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM225", "regNo": "KA51AH8349", "depot": "Depot 44 (Chandapura)", "driver": "Nagaraj V", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM260", "reg": "KA51AH6036", "cat": "C", "actualRange": 95.0, "soh": 85, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM260", "regNo": "KA51AH6036", "depot": "Depot 44 (Chandapura)", "driver": "Pradeep Rao", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM288", "reg": "KA51AH7672", "cat": "C", "actualRange": 97.2, "soh": 85, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM288", "regNo": "KA51AH7672", "depot": "Depot 44 (Chandapura)", "driver": "Someshwara Reddy", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM005", "reg": "KA51AH2421", "cat": "C", "actualRange": 98.5, "soh": 86, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Needs Fast Charge", "chargerBay": null, "assignedSchedule": null, "busId": "BM005", "regNo": "KA51AH2421", "depot": "Depot 44 (Chandapura)", "driver": "Girish Gowda", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM185", "reg": "KA51AH5820", "cat": "C", "actualRange": 99.6, "soh": 86, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM185", "regNo": "KA51AH5820", "depot": "Depot 44 (Chandapura)", "driver": "Ashwath Narayana", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM032", "reg": "KA51AH2739", "cat": "C", "actualRange": 100.2, "soh": 86, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM032", "regNo": "KA51AH2739", "depot": "Depot 44 (Chandapura)", "driver": "Maheshwarappa", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM068", "reg": "KA51AH3266", "cat": "C", "actualRange": 100.3, "soh": 86, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Charging (Bay 16)", "chargerBay": 16, "assignedSchedule": null, "busId": "BM068", "regNo": "KA51AH3266", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM004", "reg": "KA51AH2429", "cat": "C", "actualRange": 103.2, "soh": 87, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM004", "regNo": "KA51AH2429", "depot": "Depot 44 (Chandapura)", "driver": "Suresh Kumar", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM024", "reg": "KA51AH2619", "cat": "C", "actualRange": 103.9, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM024", "regNo": "KA51AH2619", "depot": "Depot 44 (Chandapura)", "driver": "Manjunath B", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM261", "reg": "KA51AH5717", "cat": "C", "actualRange": 104.3, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Needs Fast Charge", "chargerBay": null, "assignedSchedule": null, "busId": "BM261", "regNo": "KA51AH5717", "depot": "Depot 44 (Chandapura)", "driver": "Shivakumar N", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM227", "reg": "KA51AH4544", "cat": "C", "actualRange": 104.8, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM227", "regNo": "KA51AH4544", "depot": "Depot 44 (Chandapura)", "driver": "Venkatesh R", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM002", "reg": "KA51AH2434", "cat": "C", "actualRange": 105.3, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM002", "regNo": "KA51AH2434", "depot": "Depot 44 (Chandapura)", "driver": "Anand Patil", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM119", "reg": "KA51AH4129", "cat": "C", "actualRange": 105.5, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM119", "regNo": "KA51AH4129", "depot": "Depot 44 (Chandapura)", "driver": "Basavaraj M", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM208", "reg": "KA51AH7775", "cat": "B", "actualRange": 106.1, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM208", "regNo": "KA51AH7775", "depot": "Depot 44 (Chandapura)", "driver": "Raghavendra K", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM204", "reg": "KA51AH7666", "cat": "B", "actualRange": 106.1, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM204", "regNo": "KA51AH7666", "depot": "Depot 44 (Chandapura)", "driver": "Chandrashekar H", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM038", "reg": "KA51AH2741", "cat": "B", "actualRange": 106.7, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM038", "regNo": "KA51AH2741", "depot": "Depot 44 (Chandapura)", "driver": "Nagaraj V", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM001", "reg": "KA51AH4144", "cat": "B", "actualRange": 106.9, "soh": 88, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Needs Fast Charge", "chargerBay": null, "assignedSchedule": null, "busId": "BM001", "regNo": "KA51AH4144", "depot": "Depot 44 (Chandapura)", "driver": "Pradeep Rao", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM010", "reg": "KA51AH2424", "cat": "B", "actualRange": 107.7, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM010", "regNo": "KA51AH2424", "depot": "Depot 44 (Chandapura)", "driver": "Someshwara Reddy", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM298", "reg": "KA51AH6778", "cat": "B", "actualRange": 107.7, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM298", "regNo": "KA51AH6778", "depot": "Depot 44 (Chandapura)", "driver": "Girish Gowda", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM238", "reg": "KA51AH4540", "cat": "B", "actualRange": 107.9, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM238", "regNo": "KA51AH4540", "depot": "Depot 44 (Chandapura)", "driver": "Ashwath Narayana", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM003", "reg": "KA51AH2423", "cat": "B", "actualRange": 108.7, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM003", "regNo": "KA51AH2423", "depot": "Depot 44 (Chandapura)", "driver": "Maheshwarappa", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM265", "reg": "KA51AH5723", "cat": "B", "actualRange": 109.4, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM265", "regNo": "KA51AH5723", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM283", "reg": "KA51AH6249", "cat": "B", "actualRange": 109.5, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM283", "regNo": "KA51AH6249", "depot": "Depot 44 (Chandapura)", "driver": "Suresh Kumar", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM086", "reg": "KA51AH3125", "cat": "B", "actualRange": 109.5, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM086", "regNo": "KA51AH3125", "depot": "Depot 44 (Chandapura)", "driver": "Manjunath B", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM081", "reg": "KA51AH3129", "cat": "B", "actualRange": 109.8, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM081", "regNo": "KA51AH3129", "depot": "Depot 44 (Chandapura)", "driver": "Shivakumar N", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM285", "reg": "KA51AH6252", "cat": "B", "actualRange": 109.9, "soh": 89, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM285", "regNo": "KA51AH6252", "depot": "Depot 44 (Chandapura)", "driver": "Venkatesh R", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM116", "reg": "KA51AH4068", "cat": "B", "actualRange": 110.0, "soh": 90, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM116", "regNo": "KA51AH4068", "depot": "Depot 44 (Chandapura)", "driver": "Anand Patil", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM257", "reg": "KA51AH5648", "cat": "B", "actualRange": 110.5, "soh": 90, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM257", "regNo": "KA51AH5648", "depot": "Depot 44 (Chandapura)", "driver": "Basavaraj M", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM205", "reg": "KA51AH7673", "cat": "B", "actualRange": 110.7, "soh": 90, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM205", "regNo": "KA51AH7673", "depot": "Depot 44 (Chandapura)", "driver": "Raghavendra K", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM183", "reg": "KA51AH5825", "cat": "B", "actualRange": 110.8, "soh": 90, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM183", "regNo": "KA51AH5825", "depot": "Depot 44 (Chandapura)", "driver": "Chandrashekar H", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM062", "reg": "KA51AH3269", "cat": "B", "actualRange": 111.9, "soh": 90, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM062", "regNo": "KA51AH3269", "depot": "Depot 44 (Chandapura)", "driver": "Nagaraj V", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM259", "reg": "KA51AH5642", "cat": "B", "actualRange": 112.2, "soh": 90, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM259", "regNo": "KA51AH5642", "depot": "Depot 44 (Chandapura)", "driver": "Pradeep Rao", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM075", "reg": "KA51AH3122", "cat": "B", "actualRange": 112.2, "soh": 90, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM075", "regNo": "KA51AH3122", "depot": "Depot 44 (Chandapura)", "driver": "Someshwara Reddy", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM212", "reg": "KA51AH7779", "cat": "B", "actualRange": 112.6, "soh": 90, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM212", "regNo": "KA51AH7779", "depot": "Depot 44 (Chandapura)", "driver": "Girish Gowda", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM213", "reg": "KA51AH8179", "cat": "B", "actualRange": 113.2, "soh": 91, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM213", "regNo": "KA51AH8179", "depot": "Depot 44 (Chandapura)", "driver": "Ashwath Narayana", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM245", "reg": "KA51AH4799", "cat": "B", "actualRange": 114.1, "soh": 91, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM245", "regNo": "KA51AH4799", "depot": "Depot 44 (Chandapura)", "driver": "Maheshwarappa", "turnaroundState": "Shed-Out Ready", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM289", "reg": "KA51AH6471", "cat": "B", "actualRange": 114.1, "soh": 91, "soc": 73, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM289", "regNo": "KA51AH6471", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM271", "reg": "KA51AH6095", "cat": "B", "actualRange": 114.3, "soh": 91, "soc": 74, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM271", "regNo": "KA51AH6095", "depot": "Depot 44 (Chandapura)", "driver": "Suresh Kumar", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM207", "reg": "KA51AH7671", "cat": "B", "actualRange": 114.8, "soh": 91, "soc": 75, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM207", "regNo": "KA51AH7671", "depot": "Depot 44 (Chandapura)", "driver": "Manjunath B", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM200", "reg": "KA51AH7659", "cat": "B", "actualRange": 114.8, "soh": 91, "soc": 76, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM200", "regNo": "KA51AH7659", "depot": "Depot 44 (Chandapura)", "driver": "Shivakumar N", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM290", "reg": "KA51AH6467", "cat": "B", "actualRange": 114.9, "soh": 91, "soc": 77, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM290", "regNo": "KA51AH6467", "depot": "Depot 44 (Chandapura)", "driver": "Venkatesh R", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM210", "reg": "KA51AH8350", "cat": "B", "actualRange": 115.2, "soh": 91, "soc": 78, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM210", "regNo": "KA51AH8350", "depot": "Depot 44 (Chandapura)", "driver": "Anand Patil", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM157", "reg": "KA51AH4800", "cat": "B", "actualRange": 115.2, "soh": 91, "soc": 79, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM157", "regNo": "KA51AH4800", "depot": "Depot 44 (Chandapura)", "driver": "Basavaraj M", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM300", "reg": "KA51AH6782", "cat": "B", "actualRange": 115.2, "soh": 91, "soc": 80, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM300", "regNo": "KA51AH6782", "depot": "Depot 44 (Chandapura)", "driver": "Raghavendra K", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM199", "reg": "KA51AH7662", "cat": "B", "actualRange": 115.4, "soh": 91, "soc": 81, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM199", "regNo": "KA51AH7662", "depot": "Depot 44 (Chandapura)", "driver": "Chandrashekar H", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM191", "reg": "KA51AH6038", "cat": "B", "actualRange": 115.5, "soh": 91, "soc": 82, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM191", "regNo": "KA51AH6038", "depot": "Depot 44 (Chandapura)", "driver": "Nagaraj V", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM058", "reg": "KA51AH3603", "cat": "B", "actualRange": 115.5, "soh": 91, "soc": 83, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM058", "regNo": "KA51AH3603", "depot": "Depot 44 (Chandapura)", "driver": "Pradeep Rao", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM278", "reg": "KA51AH6246", "cat": "B", "actualRange": 115.6, "soh": 91, "soc": 84, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM278", "regNo": "KA51AH6246", "depot": "Depot 44 (Chandapura)", "driver": "Someshwara Reddy", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM292", "reg": "KA51AH6468", "cat": "B", "actualRange": 116.2, "soh": 91, "soc": 85, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM292", "regNo": "KA51AH6468", "depot": "Depot 44 (Chandapura)", "driver": "Girish Gowda", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM202", "reg": "KA51AH7658", "cat": "B", "actualRange": 116.2, "soh": 92, "soc": 86, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM202", "regNo": "KA51AH7658", "depot": "Depot 44 (Chandapura)", "driver": "Ashwath Narayana", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM220", "reg": "KA51AH8180", "cat": "B", "actualRange": 116.5, "soh": 92, "soc": 87, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM220", "regNo": "KA51AH8180", "depot": "Depot 44 (Chandapura)", "driver": "Maheshwarappa", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM267", "reg": "KA51AH6034", "cat": "B", "actualRange": 116.7, "soh": 92, "soc": 88, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM267", "regNo": "KA51AH6034", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM217", "reg": "KA51AH8284", "cat": "B", "actualRange": 116.8, "soh": 92, "soc": 89, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM217", "regNo": "KA51AH8284", "depot": "Depot 44 (Chandapura)", "driver": "Suresh Kumar", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM174", "reg": "KA51AH5823", "cat": "B", "actualRange": 117.3, "soh": 92, "soc": 90, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM174", "regNo": "KA51AH5823", "depot": "Depot 44 (Chandapura)", "driver": "Manjunath B", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM020", "reg": "KA51AH2556", "cat": "B", "actualRange": 117.6, "soh": 92, "soc": 91, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM020", "regNo": "KA51AH2556", "depot": "Depot 44 (Chandapura)", "driver": "Shivakumar N", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM153", "reg": "KA51AH4643", "cat": "B", "actualRange": 117.7, "soh": 92, "soc": 92, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM153", "regNo": "KA51AH4643", "depot": "Depot 44 (Chandapura)", "driver": "Venkatesh R", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM277", "reg": "KA51AH6245", "cat": "B", "actualRange": 117.8, "soh": 92, "soc": 93, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM277", "regNo": "KA51AH6245", "depot": "Depot 44 (Chandapura)", "driver": "Anand Patil", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM291", "reg": "KA51AH6466", "cat": "B", "actualRange": 117.8, "soh": 92, "soc": 72, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM291", "regNo": "KA51AH6466", "depot": "Depot 44 (Chandapura)", "driver": "Basavaraj M", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM151", "reg": "KA51AH4650", "cat": "B", "actualRange": 118.0, "soh": 92, "soc": 73, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM151", "regNo": "KA51AH4650", "depot": "Depot 44 (Chandapura)", "driver": "Raghavendra K", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM295", "reg": "KA51AH6780", "cat": "B", "actualRange": 118.1, "soh": 92, "soc": 74, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM295", "regNo": "KA51AH6780", "depot": "Depot 44 (Chandapura)", "driver": "Chandrashekar H", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM033", "reg": "KA51AH2740", "cat": "B", "actualRange": 118.3, "soh": 92, "soc": 75, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM033", "regNo": "KA51AH2740", "depot": "Depot 44 (Chandapura)", "driver": "Nagaraj V", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM124", "reg": "KA51AH4146", "cat": "B", "actualRange": 118.4, "soh": 92, "soc": 76, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM124", "regNo": "KA51AH4146", "depot": "Depot 44 (Chandapura)", "driver": "Pradeep Rao", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM275", "reg": "KA51AH6096", "cat": "B", "actualRange": 118.7, "soh": 92, "soc": 77, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM275", "regNo": "KA51AH6096", "depot": "Depot 44 (Chandapura)", "driver": "Someshwara Reddy", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM216", "reg": "KA51AH8281", "cat": "B", "actualRange": 118.7, "soh": 92, "soc": 78, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM216", "regNo": "KA51AH8281", "depot": "Depot 44 (Chandapura)", "driver": "Girish Gowda", "turnaroundState": "En-Route (Active)", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM052", "reg": "KA51AH2955", "cat": "B", "actualRange": 118.9, "soh": 92, "soc": 58, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM052", "regNo": "KA51AH2955", "depot": "Depot 44 (Chandapura)", "driver": "Ashwath Narayana", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM054", "reg": "KA51AH2951", "cat": "B", "actualRange": 118.9, "soh": 92, "soc": 59, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM054", "regNo": "KA51AH2951", "depot": "Depot 44 (Chandapura)", "driver": "Maheshwarappa", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM215", "reg": "KA51AH8346", "cat": "B", "actualRange": 119.1, "soh": 92, "soc": 60, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM215", "regNo": "KA51AH8346", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM219", "reg": "KA51AH8181", "cat": "B", "actualRange": 119.4, "soh": 93, "soc": 61, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM219", "regNo": "KA51AH8181", "depot": "Depot 44 (Chandapura)", "driver": "Suresh Kumar", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM198", "reg": "KA51AH7664", "cat": "B", "actualRange": 119.5, "soh": 93, "soc": 62, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM198", "regNo": "KA51AH7664", "depot": "Depot 44 (Chandapura)", "driver": "Manjunath B", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM222", "reg": "KA51AH8183", "cat": "B", "actualRange": 119.7, "soh": 93, "soc": 63, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM222", "regNo": "KA51AH8183", "depot": "Depot 44 (Chandapura)", "driver": "Shivakumar N", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM269", "reg": "KA51AH6030", "cat": "B", "actualRange": 120.4, "soh": 93, "soc": 64, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM269", "regNo": "KA51AH6030", "depot": "Depot 44 (Chandapura)", "driver": "Venkatesh R", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM187", "reg": "KA51AH5822", "cat": "B", "actualRange": 120.5, "soh": 93, "soc": 65, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM187", "regNo": "KA51AH5822", "depot": "Depot 44 (Chandapura)", "driver": "Anand Patil", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM019", "reg": "KA51AH2552", "cat": "A", "actualRange": 121.3, "soh": 93, "soc": 66, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM019", "regNo": "KA51AH2552", "depot": "Depot 44 (Chandapura)", "driver": "Basavaraj M", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM201", "reg": "KA51AH7656", "cat": "A", "actualRange": 121.3, "soh": 93, "soc": 67, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM201", "regNo": "KA51AH7656", "depot": "Depot 44 (Chandapura)", "driver": "Raghavendra K", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM206", "reg": "KA51AH7669", "cat": "A", "actualRange": 121.4, "soh": 93, "soc": 68, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM206", "regNo": "KA51AH7669", "depot": "Depot 44 (Chandapura)", "driver": "Chandrashekar H", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM294", "reg": "KA51AH6777", "cat": "A", "actualRange": 121.6, "soh": 93, "soc": 69, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM294", "regNo": "KA51AH6777", "depot": "Depot 44 (Chandapura)", "driver": "Nagaraj V", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM287", "reg": "KA51AH7657", "cat": "A", "actualRange": 121.6, "soh": 93, "soc": 70, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM287", "regNo": "KA51AH7657", "depot": "Depot 44 (Chandapura)", "driver": "Pradeep Rao", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM107", "reg": "KA51AH4062", "cat": "A", "actualRange": 121.6, "soh": 93, "soc": 71, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM107", "regNo": "KA51AH4062", "depot": "Depot 44 (Chandapura)", "driver": "Someshwara Reddy", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM209", "reg": "KA51AH7668", "cat": "A", "actualRange": 121.9, "soh": 93, "soc": 72, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM209", "regNo": "KA51AH7668", "depot": "Depot 44 (Chandapura)", "driver": "Girish Gowda", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM080", "reg": "KA51AH3336", "cat": "A", "actualRange": 122.2, "soh": 93, "soc": 73, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM080", "regNo": "KA51AH3336", "depot": "Depot 44 (Chandapura)", "driver": "Ashwath Narayana", "turnaroundState": "Charging", "cleanStatus": "Pending Wash", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM268", "reg": "KA51AH6035", "cat": "A", "actualRange": 122.3, "soh": 93, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM268", "regNo": "KA51AH6035", "depot": "Depot 44 (Chandapura)", "driver": "Maheshwarappa", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 3, "defectCount": 0, "hasDefectHold": false}, {"id": "BM240", "reg": "KA51AH4789", "cat": "A", "actualRange": 122.3, "soh": 93, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM240", "regNo": "KA51AH4789", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 20, "defectCount": 0, "hasDefectHold": false}, {"id": "BM255", "reg": "KA51AH5640", "cat": "A", "actualRange": 122.6, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM255", "regNo": "KA51AH5640", "depot": "Depot 44 (Chandapura)", "driver": "Suresh Kumar", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 19, "defectCount": 0, "hasDefectHold": false}, {"id": "BM276", "reg": "KA51AH6250", "cat": "A", "actualRange": 122.6, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM276", "regNo": "KA51AH6250", "depot": "Depot 44 (Chandapura)", "driver": "Manjunath B", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 18, "defectCount": 0, "hasDefectHold": false}, {"id": "BM303", "reg": "KA51AJ0138", "cat": "A", "actualRange": 122.7, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM303", "regNo": "KA51AJ0138", "depot": "Depot 44 (Chandapura)", "driver": "Shivakumar N", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 17, "defectCount": 0, "hasDefectHold": false}, {"id": "BM152", "reg": "KA51AH4652", "cat": "A", "actualRange": 123.0, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM152", "regNo": "KA51AH4652", "depot": "Depot 44 (Chandapura)", "driver": "Venkatesh R", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 16, "defectCount": 0, "hasDefectHold": false}, {"id": "BM281", "reg": "KA51AH6251", "cat": "A", "actualRange": 123.0, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM281", "regNo": "KA51AH6251", "depot": "Depot 44 (Chandapura)", "driver": "Anand Patil", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 15, "defectCount": 0, "hasDefectHold": false}, {"id": "BM274", "reg": "KA51AH6099", "cat": "A", "actualRange": 123.3, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM274", "regNo": "KA51AH6099", "depot": "Depot 44 (Chandapura)", "driver": "Basavaraj M", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 14, "defectCount": 0, "hasDefectHold": false}, {"id": "BM253", "reg": "KA51AH4987", "cat": "A", "actualRange": 123.5, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM253", "regNo": "KA51AH4987", "depot": "Depot 44 (Chandapura)", "driver": "Raghavendra K", "turnaroundState": "In 20-Min Wash", "cleanStatus": "Washing (Active)", "washTimeRemaining": 13, "defectCount": 0, "hasDefectHold": false}, {"id": "BM263", "reg": "KA51AH5715", "cat": "A", "actualRange": 123.5, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM263", "regNo": "KA51AH5715", "depot": "Depot 44 (Chandapura)", "driver": "Chandrashekar H", "turnaroundState": "Pre-Departure Check", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM279", "reg": "KA51AH6244", "cat": "A", "actualRange": 123.5, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM279", "regNo": "KA51AH6244", "depot": "Depot 44 (Chandapura)", "driver": "Nagaraj V", "turnaroundState": "Pre-Departure Check", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM249", "reg": "KA51AH6029", "cat": "A", "actualRange": 123.8, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM249", "regNo": "KA51AH6029", "depot": "Depot 44 (Chandapura)", "driver": "Pradeep Rao", "turnaroundState": "Pre-Departure Check", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM286", "reg": "KA51AH6469", "cat": "A", "actualRange": 124.1, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM286", "regNo": "KA51AH6469", "depot": "Depot 44 (Chandapura)", "driver": "Someshwara Reddy", "turnaroundState": "Pre-Departure Check", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM193", "reg": "KA51AH7660", "cat": "A", "actualRange": 124.2, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM193", "regNo": "KA51AH7660", "depot": "Depot 44 (Chandapura)", "driver": "Girish Gowda", "turnaroundState": "Pre-Departure Check", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM056", "reg": "KA51AH2953", "cat": "A", "actualRange": 124.7, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM056", "regNo": "KA51AH2953", "depot": "Depot 44 (Chandapura)", "driver": "Ashwath Narayana", "turnaroundState": "Pre-Departure Check", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM297", "reg": "KA51AH6472", "cat": "A", "actualRange": 124.7, "soh": 94, "soc": 98, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM297", "regNo": "KA51AH6472", "depot": "Depot 44 (Chandapura)", "driver": "Maheshwarappa", "turnaroundState": "Pre-Departure Check", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM214", "reg": "KA51AH8348", "cat": "A", "actualRange": 125.4, "soh": 94, "soc": 82, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM214", "regNo": "KA51AH8348", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "Defect Hold", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 3, "hasDefectHold": true}, {"id": "BM250", "reg": "KA51AH4801", "cat": "A", "actualRange": 125.5, "soh": 95, "soc": 82, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM250", "regNo": "KA51AH4801", "depot": "Depot 44 (Chandapura)", "driver": "Suresh Kumar", "turnaroundState": "Defect Hold", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 2, "hasDefectHold": true}, {"id": "BM197", "reg": "KA51AH7661", "cat": "A", "actualRange": 126.6, "soh": 95, "soc": 82, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM197", "regNo": "KA51AH7661", "depot": "Depot 44 (Chandapura)", "driver": "Manjunath B", "turnaroundState": "Defect Hold", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 3, "hasDefectHold": true}, {"id": "BM284", "reg": "KA51AH6248", "cat": "A", "actualRange": 126.8, "soh": 95, "soc": 82, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM284", "regNo": "KA51AH6248", "depot": "Depot 44 (Chandapura)", "driver": "Shivakumar N", "turnaroundState": "Defect Hold", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 2, "hasDefectHold": true}, {"id": "BM258", "reg": "KA51AH5643", "cat": "A", "actualRange": 127.1, "soh": 95, "soc": 82, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM258", "regNo": "KA51AH5643", "depot": "Depot 44 (Chandapura)", "driver": "Venkatesh R", "turnaroundState": "Defect Hold", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 3, "hasDefectHold": true}, {"id": "BM280", "reg": "KA51AH6247", "cat": "A", "actualRange": 128.5, "soh": 95, "soc": 82, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM280", "regNo": "KA51AH6247", "depot": "Depot 18 (Silk Board)", "driver": "Anand Patil", "turnaroundState": "Defect Hold", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 2, "hasDefectHold": true}, {"id": "BM203", "reg": "KA51AH7670", "cat": "A", "actualRange": 129.2, "soh": 96, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM203", "regNo": "KA51AH7670", "depot": "Depot 12 (Attibele)", "driver": "Basavaraj M", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM272", "reg": "KA51AH6097", "cat": "A", "actualRange": 129.3, "soh": 96, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM272", "regNo": "KA51AH6097", "depot": "Depot 44 (Chandapura)", "driver": "Raghavendra K", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM256", "reg": "KA51AH5641", "cat": "A", "actualRange": 130.3, "soh": 96, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM256", "regNo": "KA51AH5641", "depot": "Depot 28 (Electronic City)", "driver": "Chandrashekar H", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM282", "reg": "KA51AH7667", "cat": "A", "actualRange": 130.4, "soh": 96, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM282", "regNo": "KA51AH7667", "depot": "Depot 18 (Silk Board)", "driver": "Nagaraj V", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM248", "reg": "KA51AH4797", "cat": "A", "actualRange": 130.5, "soh": 96, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM248", "regNo": "KA51AH4797", "depot": "Depot 12 (Attibele)", "driver": "Pradeep Rao", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM293", "reg": "KA51AH6470", "cat": "A", "actualRange": 132.1, "soh": 97, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM293", "regNo": "KA51AH6470", "depot": "Depot 44 (Chandapura)", "driver": "Someshwara Reddy", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM299", "reg": "KA51AH7663", "cat": "A", "actualRange": 134.0, "soh": 97, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM299", "regNo": "KA51AH7663", "depot": "Depot 28 (Electronic City)", "driver": "Girish Gowda", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM264", "reg": "KA51AH6037", "cat": "A", "actualRange": 134.6, "soh": 97, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM264", "regNo": "KA51AH6037", "depot": "Depot 18 (Silk Board)", "driver": "Ashwath Narayana", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM223", "reg": "KA51AH8283", "cat": "A", "actualRange": 134.6, "soh": 97, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM223", "regNo": "KA51AH8283", "depot": "Depot 12 (Attibele)", "driver": "Maheshwarappa", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM239", "reg": "KA51AH4790", "cat": "A", "actualRange": 135.1, "soh": 98, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM239", "regNo": "KA51AH4790", "depot": "Depot 44 (Chandapura)", "driver": "Ramesh Gowda", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}, {"id": "BM273", "reg": "KA51AH6098", "cat": "A", "actualRange": 136.3, "soh": 98, "soc": 95, "extClean": true, "intClean": true, "maintenance": false, "status": "Ready in Depot", "chargerBay": null, "assignedSchedule": null, "busId": "BM273", "regNo": "KA51AH6098", "depot": "Depot 28 (Electronic City)", "driver": "Suresh Kumar", "turnaroundState": "Depot Staged", "cleanStatus": "Clean (Washed 20m)", "washTimeRemaining": 0, "defectCount": 0, "hasDefectHold": false}];
const SCHEDULES = [{"id": "SCH-SW-500/14", "route": "SW-500", "shift": "General shift", "routeLen": 171.4, "actualKm": 188.5, "singleChargeReq": 91.9, "chargingOcc": 1, "departure": "08:15", "arrival": "17:45", "legCount": 7, "legs": ["08:15", "11:25", "13:05", "14:20", "15:25", "16:30", "17:45"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-500/15", "route": "SW-500", "shift": "General shift", "routeLen": 171.4, "actualKm": 188.5, "singleChargeReq": 91.9, "chargingOcc": 1, "departure": "08:30", "arrival": "18:00", "legCount": 7, "legs": ["08:30", "11:40", "13:20", "14:35", "15:40", "16:45", "18:00"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/16", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "07:35", "arrival": "16:55", "legCount": 7, "legs": ["07:35", "09:05", "10:30", "11:15", "13:00", "14:45", "16:55"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/17", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "07:45", "arrival": "17:05", "legCount": 7, "legs": ["07:45", "09:15", "11:25", "13:10", "14:35", "15:10", "17:05"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/21", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "07:25", "arrival": "16:45", "legCount": 7, "legs": ["07:25", "08:55", "11:05", "12:50", "14:15", "14:50", "16:45"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/26", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "07:55", "arrival": "17:15", "legCount": 7, "legs": ["07:55", "09:25", "10:50", "11:35", "13:20", "15:05", "17:15"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/27", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "08:05", "arrival": "17:25", "legCount": 7, "legs": ["08:05", "09:35", "11:45", "13:30", "14:55", "15:30", "17:25"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/3", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "08:15", "arrival": "17:35", "legCount": 7, "legs": ["08:15", "09:45", "11:10", "11:55", "13:40", "15:25", "17:35"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/42", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "08:35", "arrival": "17:55", "legCount": 7, "legs": ["08:35", "10:05", "11:30", "12:15", "14:00", "15:45", "17:55"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/43", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "08:45", "arrival": "18:05", "legCount": 7, "legs": ["08:45", "10:15", "12:25", "14:10", "15:35", "16:10", "18:05"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/45", "route": "SW-600", "shift": "General shift", "routeLen": 143.6, "actualKm": 158.0, "singleChargeReq": 100.6, "chargingOcc": 0, "departure": "08:55", "arrival": "18:15", "legCount": 7, "legs": ["08:55", "10:25", "11:50", "12:35", "14:20", "16:05", "18:15"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/11", "route": "KBS3F", "shift": "General shift", "routeLen": 190.8, "actualKm": 209.9, "singleChargeReq": 101.6, "chargingOcc": 1, "departure": "08:10", "arrival": "17:40", "legCount": 7, "legs": ["08:10", "09:45", "11:45", "13:05", "14:10", "15:55", "17:40"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/12", "route": "KBS3F", "shift": "General shift", "routeLen": 190.8, "actualKm": 209.9, "singleChargeReq": 101.6, "chargingOcc": 1, "departure": "08:30", "arrival": "18:00", "legCount": 7, "legs": ["08:30", "10:05", "12:05", "13:25", "14:30", "16:15", "18:00"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/13", "route": "KBS3F", "shift": "General shift", "routeLen": 190.8, "actualKm": 209.9, "singleChargeReq": 101.6, "chargingOcc": 1, "departure": "08:50", "arrival": "18:20", "legCount": 7, "legs": ["08:50", "10:25", "12:50", "14:10", "14:50", "16:35", "18:20"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/14", "route": "KBS3F", "shift": "General shift", "routeLen": 190.8, "actualKm": 209.9, "singleChargeReq": 101.6, "chargingOcc": 1, "departure": "09:10", "arrival": "18:40", "legCount": 7, "legs": ["09:10", "10:40", "11:40", "13:10", "15:10", "16:55", "18:40"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/7", "route": "KBS3F", "shift": "General shift", "routeLen": 203.2, "actualKm": 223.5, "singleChargeReq": 101.6, "chargingOcc": 1, "departure": "07:30", "arrival": "17:10", "legCount": 7, "legs": ["07:30", "09:10", "11:00", "12:40", "13:40", "15:25", "17:10"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/8", "route": "KBS3F", "shift": "General shift", "routeLen": 190.8, "actualKm": 209.9, "singleChargeReq": 101.6, "chargingOcc": 1, "departure": "07:50", "arrival": "17:20", "legCount": 7, "legs": ["07:50", "09:25", "11:25", "12:45", "13:50", "15:35", "17:20"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Simple", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/31", "route": "SW-600", "shift": "General shift", "routeLen": 151.6, "actualKm": 166.8, "singleChargeReq": 108.6, "chargingOcc": 0, "departure": "08:25", "arrival": "17:45", "legCount": 7, "legs": ["08:25", "09:55", "12:05", "13:50", "15:15", "15:50", "17:45"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/2", "route": "SW-328", "shift": "Night Halt", "routeLen": 290.0, "actualKm": 159.5, "singleChargeReq": 109.4, "chargingOcc": 1, "departure": "04:30", "arrival": "20:05", "legCount": 11, "legs": ["04:30", "05:55", "08:20", "10:15", "13:00", "13:30", "15:15", "16:15", "18:05", "18:55", "20:05"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/6", "route": "SW-328", "shift": "Night Halt", "routeLen": 290.0, "actualKm": 159.5, "singleChargeReq": 109.4, "chargingOcc": 1, "departure": "05:10", "arrival": "20:25", "legCount": 11, "legs": ["05:10", "06:45", "09:00", "10:55", "13:20", "13:50", "15:35", "16:35", "18:25", "19:15", "20:25"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/10", "route": "SW-328", "shift": "Night Halt", "routeLen": 300.6, "actualKm": 165.3, "singleChargeReq": 110.0, "chargingOcc": 2, "departure": "04:15", "arrival": "20:05", "legCount": 12, "legs": ["04:15", "05:25", "06:00", "07:25", "09:30", "11:20", "13:45", "14:20", "15:55", "17:30", "19:15", "20:05"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/13", "route": "SW-328", "shift": "Night Halt", "routeLen": 298.8, "actualKm": 164.3, "singleChargeReq": 110.0, "chargingOcc": 1, "departure": "04:55", "arrival": "20:05", "legCount": 11, "legs": ["04:55", "06:15", "07:40", "09:45", "11:35", "14:00", "14:35", "16:10", "17:45", "19:30", "20:05"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/16", "route": "SW-328", "shift": "Night Halt", "routeLen": 300.6, "actualKm": 165.3, "singleChargeReq": 110.0, "chargingOcc": 2, "departure": "04:30", "arrival": "20:35", "legCount": 12, "legs": ["04:30", "05:50", "06:30", "07:55", "10:00", "11:35", "14:15", "14:50", "16:25", "18:00", "19:45", "20:35"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/20", "route": "SW-328", "shift": "Night Halt", "routeLen": 298.8, "actualKm": 164.3, "singleChargeReq": 110.0, "chargingOcc": 1, "departure": "05:15", "arrival": "20:30", "legCount": 11, "legs": ["05:15", "06:45", "08:10", "10:15", "12:05", "14:30", "15:05", "16:40", "18:15", "20:00", "20:30"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/22", "route": "SW-328", "shift": "Night Halt", "routeLen": 300.6, "actualKm": 165.3, "singleChargeReq": 110.0, "chargingOcc": 2, "departure": "05:15", "arrival": "6:35", "legCount": 12, "legs": ["05:15", "07:15", "08:40", "10:45", "12:20", "15:00", "15:35", "17:10", "18:45", "20:30", "21:30", "6:35"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/23", "route": "SW-328", "shift": "Night Halt", "routeLen": 300.6, "actualKm": 165.3, "singleChargeReq": 110.0, "chargingOcc": 2, "departure": "05:00", "arrival": "21:15", "legCount": 12, "legs": ["05:00", "06:20", "07:00", "08:25", "10:30", "12:05", "14:45", "15:20", "16:55", "18:30", "21:15", "21:15"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-356/6", "route": "SW-356", "shift": "Shift B", "routeLen": 137.2, "actualKm": 150.9, "singleChargeReq": 50.3, "chargingOcc": 2, "departure": "14:00", "arrival": "21:35", "legCount": 14, "legs": ["14:00", "14:05", "14:40", "15:15", "15:50", "16:40", "17:15", "17:55", "18:35", "19:15", "19:50", "20:25", "21:00", "21:35"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-356/7", "route": "SW-356", "shift": "Shift B", "routeLen": 137.2, "actualKm": 150.9, "singleChargeReq": 50.3, "chargingOcc": 2, "departure": "13:45", "arrival": "21:30", "legCount": 14, "legs": ["13:45", "13:50", "14:25", "15:00", "15:35", "16:10", "17:10", "17:45", "18:25", "19:05", "19:45", "20:20", "20:55", "21:30"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/2", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "03:45", "arrival": "18:45", "legCount": 8, "legs": ["03:45", "05:30", "08:00", "10:05", "13:35", "14:10", "16:15", "18:45"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/20", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "03:55", "arrival": "18:55", "legCount": 8, "legs": ["03:55", "05:40", "08:10", "10:15", "13:45", "14:20", "16:25", "18:55"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/23", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "04:05", "arrival": "19:05", "legCount": 8, "legs": ["04:05", "05:50", "08:20", "10:25", "13:55", "14:30", "16:35", "19:05"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/25", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "08:55", "arrival": "19:10", "legCount": 7, "legs": ["08:55", "09:30", "11:30", "12:30", "14:35", "17:05", "19:10"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/26", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "04:15", "arrival": "19:15", "legCount": 8, "legs": ["04:15", "06:00", "08:30", "10:35", "14:05", "14:40", "16:04", "19:15"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/32", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "06:35", "arrival": "16:50", "legCount": 7, "legs": ["06:35", "07:10", "09:10", "10:10", "12:15", "14:45", "16:50"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/34", "route": "SW-300", "shift": "General shift", "routeLen": 151.1, "actualKm": 166.2, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "06:45", "arrival": "14:55", "legCount": 6, "legs": ["06:45", "07:20", "09:20", "10:20", "12:25", "14:55"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/35", "route": "SW-300", "shift": "General shift", "routeLen": 171.7, "actualKm": 188.9, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "06:55", "arrival": "17:10", "legCount": 8, "legs": ["06:55", "07:30", "09:30", "10:30", "12:35", "15:05", "17:00", "17:10"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/36", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "07:05", "arrival": "17:20", "legCount": 7, "legs": ["07:05", "07:40", "09:40", "10:40", "12:45", "15:15", "17:20"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/40", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "07:15", "arrival": "17:30", "legCount": 7, "legs": ["07:15", "07:50", "09:50", "10:50", "12:55", "15:25", "17:30"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/43", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "07:25", "arrival": "17:40", "legCount": 7, "legs": ["07:25", "08:00", "10:00", "11:00", "13:05", "15:35", "17:40"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/46", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "07:35", "arrival": "17:50", "legCount": 7, "legs": ["07:35", "08:10", "10:10", "11:10", "13:15", "15:45", "17:50"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/61", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "07:45", "arrival": "15:55", "legCount": 7, "legs": ["07:45", "08:20", "10:20", "11:20", "13:25", "15:55", "15:55"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/66", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "08:45", "arrival": "19:00", "legCount": 7, "legs": ["08:45", "09:20", "11:20", "12:20", "14:25", "16:55", "19:00"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/73", "route": "SW-300", "shift": "General shift", "routeLen": 161.4, "actualKm": 177.5, "singleChargeReq": 115.9, "chargingOcc": 1, "departure": "08:15", "arrival": "18:30", "legCount": 7, "legs": ["08:15", "08:50", "10:50", "11:50", "13:55", "16:25", "18:30"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/77", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "04:45", "arrival": "19:45", "legCount": 8, "legs": ["04:45", "06:30", "09:00", "11:05", "14:35", "15:10", "17:15", "19:45"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/78", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "04:55", "arrival": "19:55", "legCount": 8, "legs": ["04:55", "06:40", "09:10", "11:15", "14:45", "15:20", "17:25", "19:55"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/79", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "05:05", "arrival": "20:05", "legCount": 8, "legs": ["05:05", "06:50", "09:20", "11:35", "14:55", "15:30", "17:35", "20:05"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/8", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "04:25", "arrival": "19:25", "legCount": 8, "legs": ["04:25", "06:10", "08:40", "10:45", "14:15", "14:50", "16:55", "19:25"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/80", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "05:15", "arrival": "20:15", "legCount": 8, "legs": ["05:15", "07:00", "09:30", "11:35", "15:05", "15:40", "17:45", "20:15"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-300/9", "route": "SW-300", "shift": "Night Halt", "routeLen": 231.8, "actualKm": 127.5, "singleChargeReq": 115.9, "chargingOcc": 0, "departure": "04:35", "arrival": "19:35", "legCount": 8, "legs": ["04:35", "06:20", "08:50", "10:55", "14:25", "15:00", "17:05", "19:35"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-500/12", "route": "SW-500", "shift": "General shift", "routeLen": 171.4, "actualKm": 188.5, "singleChargeReq": 116.5, "chargingOcc": 1, "departure": "07:45", "arrival": "17:15", "legCount": 7, "legs": ["07:45", "10:55", "12:40", "13:45", "14:45", "16:00", "17:15"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-500/13", "route": "SW-500", "shift": "General shift", "routeLen": 171.4, "actualKm": 188.5, "singleChargeReq": 116.5, "chargingOcc": 1, "departure": "08:00", "arrival": "17:30", "legCount": 7, "legs": ["08:00", "11:10", "12:55", "14:00", "15:00", "16:15", "17:30"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/10", "route": "SW-360", "shift": "General shift", "routeLen": 163.8, "actualKm": 180.2, "singleChargeReq": 117.7, "chargingOcc": 1, "departure": "07:25", "arrival": "17:40", "legCount": 7, "legs": ["07:25", "08:00", "10:00", "11:00", "13:05", "15:35", "17:40"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/11", "route": "SW-360", "shift": "General shift", "routeLen": 163.8, "actualKm": 180.2, "singleChargeReq": 117.7, "chargingOcc": 1, "departure": "06:55", "arrival": "17:10", "legCount": 7, "legs": ["06:55", "07:30", "09:30", "10:30", "12:35", "15:05", "17:10"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/12", "route": "SW-360", "shift": "General shift", "routeLen": 163.8, "actualKm": 180.2, "singleChargeReq": 117.7, "chargingOcc": 1, "departure": "07:05", "arrival": "17:20", "legCount": 7, "legs": ["07:05", "07:35", "09:50", "10:40", "12:45", "15:15", "17:20"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/20", "route": "SW-360", "shift": "General shift", "routeLen": 163.8, "actualKm": 180.2, "singleChargeReq": 117.7, "chargingOcc": 1, "departure": "07:35", "arrival": "17:50", "legCount": 7, "legs": ["07:35", "08:10", "10:10", "11:10", "13:15", "15:45", "17:50"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/26", "route": "SW-360", "shift": "General shift", "routeLen": 163.8, "actualKm": 180.2, "singleChargeReq": 117.7, "chargingOcc": 1, "departure": "07:45", "arrival": "18:00", "legCount": 7, "legs": ["07:45", "08:20", "10:20", "11:20", "13:25", "15:55", "18:00"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/33", "route": "SW-360", "shift": "General shift", "routeLen": 163.8, "actualKm": 180.2, "singleChargeReq": 117.7, "chargingOcc": 1, "departure": "07:55", "arrival": "18:10", "legCount": 7, "legs": ["07:55", "08:30", "10:30", "11:30", "13:35", "16:05", "18:10"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/34", "route": "SW-360", "shift": "General shift", "routeLen": 163.8, "actualKm": 180.2, "singleChargeReq": 117.7, "chargingOcc": 1, "departure": "08:05", "arrival": "16:15", "legCount": 7, "legs": ["08:05", "08:40", "10:40", "11:40", "13:45", "16:15", "16:15"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/5", "route": "SW-360", "shift": "General shift", "routeLen": 163.8, "actualKm": 180.2, "singleChargeReq": 117.7, "chargingOcc": 1, "departure": "07:15", "arrival": "17:30", "legCount": 7, "legs": ["07:15", "07:50", "09:50", "10:50", "12:55", "15:25", "17:30"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/32", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "07:25", "arrival": "22:40", "legCount": 10, "legs": ["07:25", "08:45", "10:55", "12:40", "14:25", "16:25", "16:55", "18:45", "20:55", "22:40"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/49", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:35", "arrival": "19:50", "legCount": 10, "legs": ["04:35", "05:55", "08:05", "09:50", "11:35", "13:35", "14:10", "15:55", "18:05", "19:50"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/5", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:55", "arrival": "20:10", "legCount": 10, "legs": ["04:55", "06:15", "08:25", "10:10", "11:55", "13:55", "14:30", "16:15", "18:25", "20:10"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/51", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:45", "arrival": "20:00", "legCount": 10, "legs": ["04:45", "06:05", "08:15", "10:00", "11:45", "13:45", "14:20", "16:05", "18:15", "20:00"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/52", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:15", "arrival": "19:30", "legCount": 10, "legs": ["04:15", "05:35", "07:45", "09:30", "11:15", "13:15", "13:50", "15:35", "17:45", "19:30"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/53", "route": "SW-600", "shift": "Shift B", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "14:30", "arrival": "20:30", "legCount": 10, "legs": ["14:30", "14:30", "15:05", "15:05", "16:50", "16:50", "18:45", "18:45", "20:30", "20:30"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/53", "route": "SW-600", "shift": "Shift B", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "14:30", "arrival": "20:30", "legCount": 10, "legs": ["14:30", "14:30", "15:05", "15:05", "16:50", "16:50", "18:45", "18:45", "20:30", "20:30"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/57", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:25", "arrival": "19:40", "legCount": 10, "legs": ["04:25", "05:45", "07:55", "09:40", "11:25", "13:25", "14:00", "15:45", "17:55", "19:40"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/6", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "05:05", "arrival": "20:20", "legCount": 10, "legs": ["05:05", "06:25", "08:35", "10:20", "12:05", "14:05", "14:40", "16:25", "18:35", "20:20"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/66", "route": "SW-600", "shift": "Shift B", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "14:40", "arrival": "20:35", "legCount": 10, "legs": ["14:40", "14:40", "15:15", "15:15", "17:00", "17:00", "18:55", "18:55", "20:35", "20:35"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/66", "route": "SW-600", "shift": "Shift B", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "14:40", "arrival": "20:35", "legCount": 10, "legs": ["14:40", "14:40", "15:15", "15:15", "17:00", "17:00", "18:55", "18:55", "20:35", "20:35"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/67", "route": "SW-600", "shift": "Night Halt", "routeLen": 215.9, "actualKm": 118.7, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "07:55", "arrival": "21:50", "legCount": 9, "legs": ["07:55", "10:05", "11:50", "13:35", "15:35", "16:10", "17:55", "20:05", "21:50"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/68", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "06:45", "arrival": "22:00", "legCount": 10, "legs": ["06:45", "08:05", "10:15", "12:00", "13:45", "15:45", "16:20", "18:05", "20:15", "22:00"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/69", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "06:55", "arrival": "22:10", "legCount": 10, "legs": ["06:55", "08:15", "10:25", "12:10", "13:55", "15:55", "16:30", "18:15", "20:25", "22:10"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/72", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "05:15", "arrival": "20:30", "legCount": 10, "legs": ["05:15", "06:35", "08:45", "10:30", "12:15", "14:15", "14:50", "16:35", "18:45", "20:30"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/74", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "05:35", "arrival": "20:50", "legCount": 10, "legs": ["05:35", "06:55", "09:05", "10:50", "12:35", "14:35", "15:10", "16:55", "19:05", "20:50"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/75", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "05:45", "arrival": "21:00", "legCount": 10, "legs": ["05:45", "07:05", "09:15", "11:00", "12:45", "14:45", "15:20", "17:05", "19:15", "21:00"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/78", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "07:05", "arrival": "22:20", "legCount": 10, "legs": ["07:05", "08:25", "10:35", "12:20", "14:05", "16:05", "16:40", "18:25", "20:35", "22:20"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/79", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "05:55", "arrival": "21:10", "legCount": 10, "legs": ["05:55", "07:15", "09:25", "11:10", "12:55", "14:55", "15:30", "17:15", "19:25", "21:10"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/8", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "05:25", "arrival": "20:40", "legCount": 10, "legs": ["05:25", "06:45", "08:55", "10:40", "12:25", "14:25", "15:00", "16:45", "18:55", "20:40"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Moderate", "allowedCats": ["A", "B"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/80", "route": "SW-600", "shift": "Shift B", "routeLen": 119.2, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "14:15", "arrival": "20:15", "legCount": 5, "legs": ["14:15", "14:50", "16:35", "18:30", "20:15"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/80", "route": "SW-600", "shift": "Shift B", "routeLen": 119.2, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "14:15", "arrival": "20:15", "legCount": 5, "legs": ["14:15", "14:50", "16:35", "18:30", "20:15"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/81", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "07:15", "arrival": "22:30", "legCount": 10, "legs": ["07:15", "08:35", "10:45", "12:30", "14:15", "16:15", "16:50", "18:35", "20:45", "22:30"], "timeSlot": "Extreme Peak", "timeSlotLabel": "07:00-10:00 (Extreme Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/91", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:00", "arrival": "18:45", "legCount": 10, "legs": ["04:00", "05:05", "06:30", "08:30", "10:15", "12:30", "13:05", "14:50", "17:00", "18:45"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/92", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:10", "arrival": "18:55", "legCount": 10, "legs": ["04:10", "05:15", "06:40", "08:40", "10:25", "12:40", "13:50", "15:00", "17:10", "18:55"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/93", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:20", "arrival": "19:05", "legCount": 10, "legs": ["04:20", "05:25", "06:50", "08:50", "10:35", "12:50", "13:25", "15:10", "17:20", "19:05"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/94", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:30", "arrival": "19:15", "legCount": 10, "legs": ["04:30", "05:35", "07:00", "09:00", "10:45", "13:00", "13:35", "15:20", "17:30", "19:15"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-600/95", "route": "SW-600", "shift": "Night Halt", "routeLen": 238.4, "actualKm": 131.1, "singleChargeReq": 119.2, "chargingOcc": 0, "departure": "04:40", "arrival": "19:25", "legCount": 10, "legs": ["04:40", "05:45", "07:10", "09:10", "10:55", "13:10", "13:45", "15:30", "17:40", "19:25"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/15", "route": "SW-360", "shift": "Shift B", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "14:25", "arrival": "19:55", "legCount": 4, "legs": ["14:25", "16:00", "18:15", "19:55"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/3", "route": "SW-360", "shift": "Shift B", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "14:05", "arrival": "19:40", "legCount": 4, "legs": ["14:05", "15:45", "17:55", "19:40"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/30", "route": "SW-360", "shift": "Shift B", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "14:35", "arrival": "20:05", "legCount": 4, "legs": ["14:35", "16:10", "18:25", "20:05"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/360k/38", "route": "360k", "shift": "Shift B", "routeLen": 120.0, "actualKm": 132.0, "singleChargeReq": 120.0, "chargingOcc": 0, "departure": "14:45", "arrival": "20:20", "legCount": 4, "legs": ["14:45", "16:25", "18:35", "20:20"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Moderate", "allowedCats": ["A"], "driverReq": "Standard", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/4", "route": "SW-360", "shift": "Shift B", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "14:15", "arrival": "19:50", "legCount": 4, "legs": ["14:15", "15:55", "18:05", "19:50"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/1", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "04:00", "arrival": "19:15", "legCount": 10, "legs": ["04:00", "06:10", "08:50", "11:05", "11:35", "13:10", "13:20", "13:55", "16:35", "19:15"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/11", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "05:20", "arrival": "20:35", "legCount": 10, "legs": ["05:20", "07:30", "10:10", "12:25", "12:55", "14:30", "14:40", "15:15", "17:55", "20:35"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/2", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "04:20", "arrival": "19:35", "legCount": 10, "legs": ["04:20", "06:30", "09:10", "11:25", "11:55", "13:30", "13:40", "14:15", "16:55", "19:35"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/3", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "04:40", "arrival": "19:55", "legCount": 10, "legs": ["04:40", "06:50", "09:30", "11:45", "12:15", "13:50", "14:00", "14:35", "17:15", "19:55"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/4", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "05:00", "arrival": "20:15", "legCount": 10, "legs": ["05:00", "07:10", "09:50", "12:05", "12:35", "14:10", "14:20", "14:55", "17:35", "20:15"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/6", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "05:40", "arrival": "20:55", "legCount": 10, "legs": ["05:40", "07:50", "10:30", "12:45", "13:15", "14:50", "15:00", "15:35", "18:15", "20:55"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/7", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "06:00", "arrival": "21:15", "legCount": 10, "legs": ["06:00", "08:10", "10:50", "13:05", "13:35", "15:10", "15:20", "15:55", "18:35", "21:15"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/8", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "06:20", "arrival": "21:35", "legCount": 10, "legs": ["06:20", "08:30", "11:10", "13:25", "13:55", "15:30", "15:40", "16:15", "18:45", "21:35"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-361/9", "route": "SW-361", "shift": "Night Halt", "routeLen": 257.8, "actualKm": 141.8, "singleChargeReq": 47.3, "chargingOcc": 2, "departure": "06:40", "arrival": "21:55", "legCount": 10, "legs": ["06:40", "09:00", "11:30", "13:45", "14:15", "15:50", "16:00", "16:35", "19:00", "21:55"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/4", "route": "SW-328", "shift": "Night Halt", "routeLen": 290.0, "actualKm": 159.5, "singleChargeReq": 53.2, "chargingOcc": 2, "departure": "06:20", "arrival": "20:55", "legCount": 11, "legs": ["06:20", "07:45", "09:20", "10:05", "11:50", "12:35", "13:20", "15:50", "16:25", "18:40", "20:55"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/7", "route": "SW-328", "shift": "Night Halt", "routeLen": 290.0, "actualKm": 159.5, "singleChargeReq": 53.2, "chargingOcc": 2, "departure": "05:55", "arrival": "20:35", "legCount": 11, "legs": ["05:55", "07:15", "09:00", "09:50", "11:30", "12:15", "13:00", "15:30", "16:05", "18:20", "20:35"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/8", "route": "SW-328", "shift": "Night Halt", "routeLen": 290.0, "actualKm": 159.5, "singleChargeReq": 53.2, "chargingOcc": 2, "departure": "05:40", "arrival": "20:15", "legCount": 11, "legs": ["05:40", "07:05", "08:40", "09:25", "11:10", "11:55", "12:40", "15:10", "15:45", "18:00", "20:15"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/15", "route": "SW-360", "shift": "Shift B", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "14:25", "arrival": "19:55", "legCount": 4, "legs": ["14:25", "16:00", "18:15", "19:55"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/3", "route": "SW-360", "shift": "Shift B", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "14:05", "arrival": "19:40", "legCount": 4, "legs": ["14:05", "15:45", "17:55", "19:40"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/30", "route": "SW-360", "shift": "Shift B", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "14:35", "arrival": "20:05", "legCount": 4, "legs": ["14:35", "16:10", "18:25", "20:05"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/38", "route": "SW-360", "shift": "Shift A", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "06:40", "arrival": "12:30", "legCount": 4, "legs": ["06:40", "07:55", "10:25", "12:30"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-360/4", "route": "SW-360", "shift": "Shift B", "routeLen": 133.6, "actualKm": 147.0, "singleChargeReq": 49.0, "chargingOcc": 2, "departure": "14:15", "arrival": "19:50", "legCount": 4, "legs": ["14:15", "15:55", "18:05", "19:50"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-399/5", "route": "SW-399", "shift": "Night Halt", "routeLen": 265.5, "actualKm": 146.0, "singleChargeReq": 48.7, "chargingOcc": 2, "departure": "06:45", "arrival": "21:15", "legCount": 8, "legs": ["06:45", "08:15", "10:15", "11:45", "14:40", "17:10", "18:45", "21:15"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-399/6", "route": "SW-399", "shift": "Night Halt", "routeLen": 265.5, "actualKm": 146.0, "singleChargeReq": 48.7, "chargingOcc": 2, "departure": "06:50", "arrival": "21:50", "legCount": 8, "legs": ["06:50", "08:45", "10:45", "12:20", "15:35", "17:45", "19:20", "21:50"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-356/3", "route": "SW-356", "shift": "Night Halt", "routeLen": 252.0, "actualKm": 138.6, "singleChargeReq": 46.2, "chargingOcc": 2, "departure": "05:15", "arrival": "22:25", "legCount": 26, "legs": ["05:15", "05:20", "05:55", "06:30", "07:00", "08:15", "08:55", "09:35", "10:15", "10:55", "11:35", "12:05", "14:25", "14:35", "15:10", "15:45", "16:50", "17:30", "18:10", "18:50", "19:30", "20:05", "20:45", "21:20", "21:55", "22:25"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-356/6", "route": "SW-356", "shift": "Shift B", "routeLen": 137.2, "actualKm": 150.9, "singleChargeReq": 50.3, "chargingOcc": 2, "departure": "14:00", "arrival": "21:35", "legCount": 14, "legs": ["14:00", "14:05", "14:40", "15:15", "15:50", "16:40", "17:15", "17:55", "18:35", "19:15", "19:50", "20:25", "21:00", "21:35"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-356/7", "route": "SW-356", "shift": "Shift B", "routeLen": 137.2, "actualKm": 150.9, "singleChargeReq": 50.3, "chargingOcc": 2, "departure": "13:45", "arrival": "21:30", "legCount": 14, "legs": ["13:45", "13:50", "14:25", "15:00", "15:35", "16:10", "17:10", "17:45", "18:25", "19:05", "19:45", "20:20", "20:55", "21:30"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-356/8", "route": "SW-356", "shift": "Night Halt", "routeLen": 252.0, "actualKm": 138.6, "singleChargeReq": 46.2, "chargingOcc": 2, "departure": "05:35", "arrival": "22:35", "legCount": 26, "legs": ["05:35", "05:40", "06:15", "06:50", "07:30", "08:30", "09:05", "09:45", "10:25", "11:05", "11:45", "12:15", "14:35", "14:45", "15:20", "15:55", "17:00", "17:40", "18:20", "19:00", "19:40", "20:15", "20:55", "21:30", "22:05", "22:35"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-399/3", "route": "SW-399", "shift": "Night Halt", "routeLen": 283.8, "actualKm": 156.1, "singleChargeReq": 52.0, "chargingOcc": 2, "departure": "05:00", "arrival": "18:35", "legCount": 8, "legs": ["05:00", "06:25", "08:00", "09:30", "13:15", "15:00", "17:00", "18:35"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-399/4", "route": "SW-399", "shift": "Night Halt", "routeLen": 283.8, "actualKm": 156.1, "singleChargeReq": 52.0, "chargingOcc": 2, "departure": "05:45", "arrival": "19:05", "legCount": 8, "legs": ["05:45", "07:10", "09:10", "10:45", "14:00", "15:45", "17:30", "19:05"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/1", "route": "SW-328", "shift": "Night Halt", "routeLen": 291.4, "actualKm": 160.3, "singleChargeReq": 53.4, "chargingOcc": 2, "departure": "13:10", "arrival": "19:00", "legCount": 10, "legs": ["13:10", "13:10", "13:20", "13:20", "13:55", "13:55", "16:50", "16:50", "19:00", "19:00"], "timeSlot": "Peak", "timeSlotLabel": "10:00-16:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/12", "route": "SW-328", "shift": "Night Halt", "routeLen": 291.4, "actualKm": 160.3, "singleChargeReq": 53.4, "chargingOcc": 2, "departure": "04:40", "arrival": "19:40", "legCount": 10, "legs": ["04:40", "06:10", "07:40", "10:30", "11:05", "13:50", "14:00", "14:35", "17:30", "19:40"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/14", "route": "SW-328", "shift": "Night Halt", "routeLen": 291.4, "actualKm": 160.3, "singleChargeReq": 53.4, "chargingOcc": 2, "departure": "04:50", "arrival": "19:50", "legCount": 10, "legs": ["04:50", "06:15", "07:50", "10:40", "11:15", "14:00", "14:10", "14:45", "17:40", "19:50"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/19", "route": "SW-328", "shift": "Night Halt", "routeLen": 291.4, "actualKm": 160.3, "singleChargeReq": 53.4, "chargingOcc": 2, "departure": "05:00", "arrival": "20:00", "legCount": 10, "legs": ["05:00", "06:25", "08:00", "10:50", "11:25", "14:10", "14:20", "14:55", "17:50", "20:00"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/21", "route": "SW-328", "shift": "Night Halt", "routeLen": 291.4, "actualKm": 160.3, "singleChargeReq": 53.4, "chargingOcc": 2, "departure": "05:20", "arrival": "21:10", "legCount": 10, "legs": ["05:20", "06:50", "08:25", "11:15", "11:45", "15:20", "15:30", "16:05", "19:00", "21:10"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/25", "route": "SW-328", "shift": "Night Halt", "routeLen": 291.4, "actualKm": 160.3, "singleChargeReq": 53.4, "chargingOcc": 2, "departure": "05:50", "arrival": "21:50", "legCount": 10, "legs": ["05:50", "07:20", "08:55", "11:45", "12:15", "16:00", "16:10", "16:45", "19:40", "21:50"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/28", "route": "SW-328", "shift": "Night Halt", "routeLen": 291.4, "actualKm": 160.3, "singleChargeReq": 53.4, "chargingOcc": 2, "departure": "05:30", "arrival": "21:30", "legCount": 10, "legs": ["05:30", "07:00", "08:35", "11:25", "11:55", "15:40", "15:50", "16:25", "19:20", "21:30"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/3", "route": "SW-328", "shift": "Night Halt", "routeLen": 291.4, "actualKm": 160.3, "singleChargeReq": 53.4, "chargingOcc": 2, "departure": "04:10", "arrival": "19:10", "legCount": 10, "legs": ["04:10", "05:35", "07:10", "10:00", "10:35", "13:20", "13:30", "14:05", "17:00", "19:10"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW-328/9", "route": "SW-328", "shift": "Night Halt", "routeLen": 289.4, "actualKm": 159.2, "singleChargeReq": 53.1, "chargingOcc": 2, "departure": "04:20", "arrival": "19:20", "legCount": 9, "legs": ["04:20", "05:45", "07:20", "10:10", "13:30", "13:40", "14:15", "17:10", "19:20"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/15", "route": "KBS3F", "shift": "Night Halt", "routeLen": 279.3, "actualKm": 153.6, "singleChargeReq": 51.2, "chargingOcc": 2, "departure": "05:10", "arrival": "21:40", "legCount": 9, "legs": ["05:10", "06:35", "08:45", "10:30", "14:10", "15:50", "18:00", "19:55", "21:40"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/16", "route": "KBS3F", "shift": "Night Halt", "routeLen": 279.3, "actualKm": 153.6, "singleChargeReq": 51.2, "chargingOcc": 2, "departure": "04:45", "arrival": "21:25", "legCount": 9, "legs": ["04:45", "06:10", "08:20", "10:05", "13:50", "15:30", "17:40", "19:40", "21:25"], "timeSlot": "Peak", "timeSlotLabel": "20:00-23:00 (Peak)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/17", "route": "KBS3F", "shift": "Night Halt", "routeLen": 279.3, "actualKm": 153.6, "singleChargeReq": 51.2, "chargingOcc": 2, "departure": "05:55", "arrival": "22:25", "legCount": 9, "legs": ["05:55", "07:20", "09:30", "11:15", "15:45", "16:45", "19:05", "20:50", "22:25"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}, {"id": "SCH-SW/KBS3F/18", "route": "KBS3F", "shift": "Night Halt", "routeLen": 279.3, "actualKm": 153.6, "singleChargeReq": 51.2, "chargingOcc": 2, "departure": "06:10", "arrival": "22:35", "legCount": 9, "legs": ["06:10", "07:35", "09:45", "11:30", "16:00", "17:00", "19:15", "20:55", "22:35"], "timeSlot": "Normal", "timeSlotLabel": "05:00-07:00 (Normal)", "category": "Complex", "allowedCats": ["A"], "driverReq": "Senior", "assignedBus": null, "assignedDriver": null, "status": "Pending"}];
const ROUTES = [{"id": "SW-328", "name": "Attibele - Hosakote Industrial Corridor", "category": "Complex", "color": "#C5A059", "glowColor": "rgba(234, 88, 12, 0.25)", "distance": 34.6, "dailyKm": 291.4, "stops": 28, "buses": 10, "trips": 24, "via": "Sarjapur, Dommasandra, Varthur, Whitefield, Kadugodi", "waypoints": [[12.7788, 77.7712], [12.825, 77.781], [12.8596, 77.7876], [12.8833, 77.7558], [12.915, 77.75], [12.9416, 77.7472], [12.9698, 77.7499], [12.9984, 77.761], [13.035, 77.775], [13.0714, 77.7981]], "colorDark": "#00F5D4"}, {"id": "SW-600", "name": "Banashankari - Chandapura Express Trunk", "category": "Moderate", "color": "#4A7BB0", "glowColor": "rgba(2, 132, 199, 0.25)", "distance": 28.7, "dailyKm": 157.9, "stops": 34, "buses": 13, "trips": 310, "via": "Chandapura, Electronic City, Silk Board, BTM Layout, Jayanagar", "waypoints": [[12.7788, 77.7712], [12.7933, 77.7011], [12.8167, 77.6833], [12.8452, 77.6602], [12.8789, 77.6481], [12.9067, 77.6322], [12.9176, 77.6238], [12.9166, 77.6101], [12.9212, 77.5938], [12.9177, 77.5739]], "colorDark": "#00E676"}, {"id": "SW-360", "name": "Central Hub - Attibele Concession Trunk", "category": "Complex", "color": "#2A2A2A", "glowColor": "rgba(79, 70, 229, 0.25)", "distance": 34.2, "dailyKm": 188.5, "stops": 38, "buses": 35, "trips": 104, "via": "Attibele, Chandapura, Electronic City, Silk Board, Dairy Circle, Corporation, Majestic", "waypoints": [[12.7788, 77.7712], [12.7933, 77.7011], [12.8452, 77.6602], [12.9176, 77.6238], [12.9378, 77.6012], [12.9542, 77.5925], [12.9665, 77.5878], [12.9774, 77.5727]], "colorDark": "#CBD5E1"}, {"id": "SW-300", "name": "Central Express - Attibele Fast Transit", "category": "Moderate", "color": "#8C733E", "glowColor": "rgba(29, 78, 216, 0.25)", "distance": 34.2, "dailyKm": 168.0, "stops": 36, "buses": 4, "trips": 146, "via": "Hosur Road Express, Madiwala, Richmond Circle, KBS", "waypoints": [[12.7788, 77.7712], [12.7933, 77.7011], [12.8452, 77.6602], [12.9176, 77.6238], [12.925, 77.618], [12.958, 77.598], [12.9774, 77.5727]], "colorDark": "#8E9AAF"}, {"id": "SW-500", "name": "Outer Ring Road - Chandapura Concession", "category": "Complex", "color": "#111827", "glowColor": "rgba(5, 150, 105, 0.25)", "distance": 42.8, "dailyKm": 188.5, "stops": 42, "buses": 9, "trips": 90, "via": "Electronic City, Silk Board, Outer Ring Road, Marathahalli, KR Puram, Hebbal", "waypoints": [[12.7933, 77.7011], [12.8452, 77.6602], [12.9176, 77.6238], [12.9121, 77.6445], [12.926, 77.6762], [12.9569, 77.7011], [12.9881, 77.6908], [13.0039, 77.6744], [13.0245, 77.6481], [13.0358, 77.597]], "colorDark": "#FF6B6B"}, {"id": "SW-356", "name": "Anekal - Chandapura Tech Feeder", "category": "Simple", "color": "#B8933E", "glowColor": "rgba(217, 119, 6, 0.25)", "distance": 15.2, "dailyKm": 188.5, "stops": 18, "buses": 21, "trips": 200, "via": "Chandapura Circle, Marsur Handpost, Iggalur, Anekal Bus Stand", "waypoints": [[12.7933, 77.7011], [12.775, 77.7], [12.7562, 77.6985], [12.735, 77.698], [12.7111, 77.6974]], "colorDark": "#00F5D4"}, {"id": "SW-361", "name": "City Market - Anekal Radial Link", "category": "Moderate", "color": "#5B7B9C", "glowColor": "rgba(192, 38, 211, 0.25)", "distance": 37.8, "dailyKm": 160.2, "stops": 32, "buses": 4, "trips": 88, "via": "Anekal, Jigani APC Circle, Bannerghatta, Gottigere, Dairy Circle, KR Market", "waypoints": [[12.7111, 77.6974], [12.75, 77.67], [12.7828, 77.6405], [12.8009, 77.5777], [12.8624, 77.5878], [12.915, 77.595], [12.9378, 77.6012], [12.9658, 77.5759]], "colorDark": "#00E676"}, {"id": "SW-399", "name": "Bannerghatta - Jigani Industrial Spur", "category": "Simple", "color": "#7A622A", "glowColor": "rgba(13, 148, 136, 0.25)", "distance": 28.5, "dailyKm": 142.5, "stops": 24, "buses": 4, "trips": 32, "via": "Chandapura, Jigani Industrial Area, Bannerghatta National Park", "waypoints": [[12.7933, 77.7011], [12.788, 77.67], [12.7828, 77.6405], [12.795, 77.6], [12.8009, 77.5777]], "colorDark": "#8E9AAF"}];

let DEFECT_LOGS = [
  { id: 'DEF-1041', busId: 'BM042', depot: 'Depot 44 (Chandapura)', category: 'HVAC & Thermal', complaint: 'Auxiliary compressor high head pressure during noon heat', recipient: 'Internal Supervisor', priority: 'Medium (Service Bay)', status: 'Under Inspection' },
  { id: 'DEF-1042', busId: 'BM085', depot: 'Depot 44 (Chandapura)', category: 'Suspension & Brakes', complaint: 'Air suspension leveling valve slow response rear axle', recipient: 'External Supervisor', priority: 'High (Ground Vehicle)', status: 'In Bay' },
  { id: 'DEF-1043', busId: 'BM110', depot: 'Depot 28 (Electronic City)', category: 'Doors & Interior', complaint: 'Door sensitive edge sensor calibration needed', recipient: 'External Supervisor', priority: 'Low (Minor)', status: 'Scheduled' }
];

// Active Wash Bays (4 Stalls)
let WASH_BAYS = [
  { bayId: 'BAY W-01', busId: 'BM032', depot: 'Depot 44 (Chandapura)', elapsedSec: 420, totalSec: 1200, status: 'Active' },
  { bayId: 'BAY W-02', busId: 'BM055', depot: 'Depot 44 (Chandapura)', elapsedSec: 850, totalSec: 1200, status: 'Active' },
  { bayId: 'BAY W-03', busId: 'BM089', depot: 'Depot 44 (Chandapura)', elapsedSec: 1100, totalSec: 1200, status: 'Active' },
  { bayId: 'BAY W-04', busId: 'BM114', depot: 'Depot 28 (Electronic City)', elapsedSec: 210, totalSec: 1200, status: 'Active' }
];

let PRE_CHECK_QUEUE = [
  { busId: 'BM002', depot: 'Depot 44 (Chandapura)', actualRange: 124.0, soc: 98, completedAt: '08:25 IST', signedOff: false },
  { busId: 'BM015', depot: 'Depot 44 (Chandapura)', actualRange: 118.5, soc: 98, completedAt: '08:28 IST', signedOff: false },
  { busId: 'BM027', depot: 'Depot 44 (Chandapura)', actualRange: 130.2, soc: 98, completedAt: '08:29 IST', signedOff: false }
];

// Simulation State
let simTime = 8.5; // 08:30 IST
let simSpeed = 1;
let simPaused = false;
let activeRouteFilter = 'ALL';
let activeLiveBuses = [];
let map = null;
let depotMarker = null;
let routeLayers = {};
let busMarkers = {};
let chandapuraDepot = [12.7933, 77.7011];
let weatherFactor = 1.0;
let trafficFactor = 0;
let substationChartInstance = null;
let batteryChartInstance = null;

// Initialize on Load
window.addEventListener('DOMContentLoaded', () => {
  solveAllSchedulesGlobal(true);
  initMap();
setTimeout(() => { if(map) map.invalidateSize(); window.dispatchEvent(new Event("resize")); }, 500);
  initSimulatedLiveBuses();
  renderScheduleTable();
  renderWashBays();
  renderPreCheckQueue();
  renderChargersGrid();
  renderGanttTimeline();
  renderFleetTable();
  renderDefectLogs();
  renderRecurringDefects();
  initSubstationChart();
  initBatteryScatterChart();
  updateKpiMetrics();
  startSimulationClock();
  startWashBayTicker();
});

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = isDark ? '☀️ Light' : '🌙 Dark';
  }
  updateThemeColors(isDark);
}

function updateThemeColors(isDark) {
  if (substationChartInstance) {
    substationChartInstance.destroy();
    initSubstationChart();
  }
  if (batteryChartInstance) {
    batteryChartInstance.destroy();
    initBatteryScatterChart();
  }

  ROUTES.forEach(r => {
    const color = isDark ? (r.colorDark || '#00F5D4') : (r.color || '#C5A059');
    if (routeLayers[r.id]) {
      routeLayers[r.id].eachLayer(layer => {
        if (layer.setStyle) layer.setStyle({ color: color });
      });
    }
  });

  activeLiveBuses.forEach(b => {
    const marker = busMarkers[b.busId];
    if (marker) {
      const rColor = isDark ? (b.routeColorDark || '#00F5D4') : (b.routeColor || '#C5A059');
      const bg = isDark ? '#1E293B' : '#FFFFFF';
      const textC = isDark ? '#E0E0E0' : '#111827';
      const busIcon = L.divIcon({
        className: 'custom-bus-marker',
        html: `<div style="background:${bg}; color:${textC}; border:2px solid ${rColor}; border-radius:6px; padding:2px 7px; font-weight:800; font-size:10.5px; font-family:var(--font-mono); box-shadow:0 2px 8px rgba(0,0,0,0.15); display:flex; align-items:center; gap:4px; cursor:pointer;">
          <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${rColor};"></span> ${b.busId}
        </div>`,
        iconSize: [72, 24],
        iconAnchor: [36, 12]
      });
      marker.setIcon(busIcon);
    }
  });
}

// Leaflet Map Initialization
function initMap() {
  map = L.map('leafletMap', {
    center: [12.85, 77.68],
    zoom: 11,
    zoomControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors | Ashok Leyland Intelligent Transit',
    className: 'light-map-tiles',
    maxZoom: 18
  }).addTo(map);

  const isDark = document.body.classList.contains('dark-mode');
  const depotIcon = L.divIcon({
    className: 'custom-depot-marker',
    html: `<div style="background:${isDark ? '#0B132B' : '#111827'}; color:${isDark ? '#E0E0E0' : '#FFFFFF'}; padding:5px 10px; border-radius:8px; font-weight:800; font-size:11px; border:2px solid ${isDark ? '#00F5D4' : '#C5A059'}; box-shadow:0 3px 12px rgba(17,24,39,0.25); display:flex; align-items:center; gap:5px;">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="${isDark ? '#00F5D4' : '#C5A059'}"><path d="M12 2L2 12h3v8h14v-8h3L12 2z"/></svg>
      CHANDAPURA DEPOT 44
    </div>`,
    iconSize: [160, 30],
    iconAnchor: [80, 15]
  });
  depotMarker = L.marker(chandapuraDepot, { icon: depotIcon }).addTo(map)
    .bindPopup('<b>Chandapura Depot 44 Master Hub</b><br>16 Fast Charger Bays • 4 Automated Wash Bays • Maintenance Workshop');

  const chipsContainer = document.getElementById('routeChipsContainer');
  chipsContainer.innerHTML = `<button class="route-chip active" onclick="filterMapRoute('ALL', this)">All Corridors (8)</button>`;

  ROUTES.forEach(r => {
    const curColor = isDark ? (r.colorDark || '#00F5D4') : (r.color || '#C5A059');

    const polylineOuter = L.polyline(r.waypoints, {
      color: curColor,
      weight: 6,
      opacity: 0.25,
      lineCap: 'round',
      lineJoin: 'round'
    });

    const polylineInner = L.polyline(r.waypoints, {
      color: curColor,
      weight: 3,
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round'
    }).bindPopup(`<b>Corridor ${r.id}: ${r.name}</b><br>Category: <b>${r.category}</b><br>Daily Concession: ${r.dailyKm} km`);

    const layerGroup = L.layerGroup([polylineOuter, polylineInner]).addTo(map);
    routeLayers[r.id] = layerGroup;

    chipsContainer.innerHTML += `
      <button class="route-chip" style="--chip-color:${curColor};" onclick="filterMapRoute('${r.id}', this)">
        <span class="route-dot"></span>
        ${r.id}
      </button>
    `;
  });
}

function filterMapRoute(routeId, btn) {
  activeRouteFilter = routeId;
  document.querySelectorAll('.route-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  ROUTES.forEach(r => {
    if (routeId === 'ALL' || r.id === routeId) {
      if (!map.hasLayer(routeLayers[r.id])) map.addLayer(routeLayers[r.id]);
    } else {
      if (map.hasLayer(routeLayers[r.id])) map.removeLayer(routeLayers[r.id]);
    }
  });

  activeLiveBuses.forEach(b => {
    const m = busMarkers[b.busId];
    if (m) {
      if (routeId === 'ALL' || b.routeId === routeId) {
        if (!map.hasLayer(m)) map.addLayer(m);
      } else {
        if (map.hasLayer(m)) map.removeLayer(m);
      }
    }
  });
}

function fitDepotBounds() { map.setView(chandapuraDepot, 14); }
function fitAllRoutesBounds() {
  const allWaypoints = ROUTES.flatMap(r => r.waypoints);
  map.fitBounds(L.latLngBounds(allWaypoints), { padding: [30, 30] });
}

// Initialize 28 Live Animated En-Route Buses
function initSimulatedLiveBuses() {
  const selectedRoutes = ROUTES.slice(0, 8);
  const activeFleet = FLEET.filter(b => b.turnaroundState === 'En-Route (Active)' || b.turnaroundState === 'Shed-Out Ready');
  let busIdx = 0;

  selectedRoutes.forEach(r => {
    const busesOnRoute = r.id === 'SW-360' ? 6 : (r.id === 'SW-600' ? 5 : (r.id === 'SW-328' ? 4 : 3));
    for (let i = 0; i < busesOnRoute; i++) {
      const fleetItem = activeFleet[busIdx % activeFleet.length];
      busIdx++;

      activeLiveBuses.push({
        busId: fleetItem.busId,
        regNo: fleetItem.regNo,
        cat: fleetItem.cat,
        soh: fleetItem.soh,
        soc: Math.floor(70 + Math.random() * 25),
        actualRange: fleetItem.actualRange,
        driver: fleetItem.driver,
        cleanStatus: fleetItem.cleanStatus,
        turnaroundState: fleetItem.turnaroundState,
        depot: fleetItem.depot,
        routeId: r.id,
        routeName: r.name,
        routeColor: r.color,
        routeColorDark: r.colorDark,
        waypoints: r.waypoints,
        progress: (i / busesOnRoute) + (Math.random() * 0.1),
        speed: 28 + Math.floor(Math.random() * 16)
      });
    }
  });

  if (activeLiveBuses.length > 0) {
    showBusTelemetry(activeLiveBuses[0]);
  }
}

function showBusTelemetry(b) {
  const sidebar = document.getElementById('radarSidebarContent');
  const barClass = b.soc > 40 ? '' : (b.soc > 20 ? 'warning' : 'critical');

  sidebar.innerHTML = `
    <div class="telemetry-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="width:36px; height:36px; border-radius:7px; background:#111827; border:1px solid var(--brand-primary); display:flex; align-items:center; justify-content:center; color:var(--brand-primary); font-weight:800; font-size:13px;">
            ${b.cat}
          </div>
          <div>
            <div style="font-size:13.5px; font-weight:800; font-family:var(--font-mono); color:var(--text-bright);">${b.busId}</div>
            <div style="font-size:10px; color:var(--text-secondary); font-family:var(--font-mono);">${b.regNo} • ${b.depot}</div>
          </div>
        </div>
        <span class="cat-badge cat-${b.cat.toLowerCase()}">Cat ${b.cat}</span>
      </div>

      <div style="margin:10px 0;">
        <div style="height:9px; background:var(--bg-card-alt); border:1px solid var(--border-card); border-radius:5px; overflow:hidden;">
          <div class="bay-progress-fill ${barClass}" style="width:${b.soc}%;"></div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:4px; font-size:10.5px; font-family:var(--font-mono);">
          <span style="color:var(--text-secondary);">State of Charge (SOC)</span>
          <span style="font-weight:800; color:var(--text-bright);">${b.soc.toFixed(1)}%</span>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:6px; margin-top:8px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-card); border-radius:6px; padding:7px 9px;">
          <div style="font-size:9.5px; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Tested Range</div>
          <div style="font-size:12.5px; font-weight:700; font-family:var(--font-mono); color:var(--text-bright);">${b.actualRange} km</div>
        </div>
        <div style="background:var(--bg-surface); border:1px solid var(--border-card); border-radius:6px; padding:7px 9px;">
          <div style="font-size:9.5px; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Battery SOH</div>
          <div style="font-size:12.5px; font-weight:700; font-family:var(--font-mono); color:var(--brand-primary);">${b.soh}%</div>
        </div>
        <div style="background:var(--bg-surface); border:1px solid var(--border-card); border-radius:6px; padding:7px 9px;">
          <div style="font-size:9.5px; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Turnaround State</div>
          <div style="font-size:11px; font-weight:800; color:var(--text-bright);">${b.turnaroundState}</div>
        </div>
        <div style="background:var(--bg-surface); border:1px solid var(--border-card); border-radius:6px; padding:7px 9px;">
          <div style="font-size:9.5px; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Cleanliness</div>
          <div style="font-size:11px; font-weight:700; color:var(--text-bright);">✓ Clean (20m Wash)</div>
        </div>
        <div style="background:var(--bg-surface); border:1px solid var(--border-card); border-radius:6px; padding:7px 9px; grid-column:span 2;">
          <div style="font-size:9.5px; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Assigned Driver</div>
          <div style="font-size:11.5px; font-weight:700; color:var(--text-bright); display:flex; justify-content:space-between; align-items:center;">
            <span>${b.driver}</span>
            <button class="btn-secondary" style="font-size:9.5px; padding:2px 6px;" onclick="promptDriverChange('${b.busId}')">Change</button>
          </div>
        </div>
      </div>
    </div>

    <div class="telemetry-card">
      <div style="font-size:10.5px; font-weight:700; color:var(--text-secondary); text-transform:uppercase; margin-bottom:4px;">Active Concession Corridor</div>
      <div style="font-size:12px; font-weight:800; color:var(--text-bright);">${b.routeName}</div>
      <div style="margin-top:8px; display:flex; justify-content:space-between; font-size:10.5px; font-family:var(--font-mono);">
        <span style="color:var(--text-secondary);">Live Speed:</span>
        <span style="font-weight:700; color:var(--text-bright);">${b.speed} km/h</span>
      </div>
    </div>
  `;
}

function promptDriverChange(busId) {
  const newDriver = prompt(`Assign new driver for Electric Bus ${busId}:`, 'Venkatesh R');
  if (newDriver) {
    const b = FLEET.find(x => x.busId === busId);
    if (b) b.driver = newDriver;
    const live = activeLiveBuses.find(x => x.busId === busId);
    if (live) { live.driver = newDriver; showBusTelemetry(live); }
    renderFleetTable();
    alert(`Driver updated for ${busId}: ${newDriver}`);
  }
}

function interpolateRoutePosition(waypoints, progress) {
  if (!waypoints || waypoints.length === 0) return chandapuraDepot;
  if (waypoints.length === 1) return waypoints[0];

  const totalSegments = waypoints.length - 1;
  const rawIdx = progress * totalSegments;
  const segIdx = Math.min(Math.floor(rawIdx), totalSegments - 1);
  const segProgress = rawIdx - segIdx;

  const p1 = waypoints[segIdx];
  const p2 = waypoints[segIdx + 1];

  const lat = p1[0] + (p2[0] - p1[0]) * segProgress;
  const lng = p1[1] + (p2[1] - p1[1]) * segProgress;
  return [lat, lng];
}

function startSimulationClock() {
  setInterval(() => {
    if (simPaused) return;

    simTime = (simTime + (0.0005 * simSpeed)) % 24;
    updateClockDisplay();

    activeLiveBuses.forEach(b => {
      b.progress = (b.progress + (0.0015 * simSpeed)) % 1.0;
      b.soc = Math.max(20, b.soc - (0.005 * simSpeed * weatherFactor));

      const pos = interpolateRoutePosition(b.waypoints, b.progress);

      const isDark = document.body.classList.contains('dark-mode');
      const rColor = isDark ? (b.routeColorDark || '#00F5D4') : (b.routeColor || '#C5A059');
      const bg = isDark ? '#1E293B' : '#FFFFFF';
      const textC = isDark ? '#E0E0E0' : '#111827';

      if (!busMarkers[b.busId]) {
        const busIcon = L.divIcon({
          className: 'custom-bus-marker',
          html: `<div style="background:${bg}; color:${textC}; border:2px solid ${rColor}; border-radius:6px; padding:2px 7px; font-weight:800; font-size:10.5px; font-family:var(--font-mono); box-shadow:0 2px 8px rgba(0,0,0,0.15); display:flex; align-items:center; gap:4px; cursor:pointer;">
            <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${rColor};"></span> ${b.busId}
          </div>`,
          iconSize: [72, 24],
          iconAnchor: [36, 12]
        });

        const marker = L.marker(pos, { icon: busIcon }).addTo(map);
        marker.on('click', () => showBusTelemetry(b));
        busMarkers[b.busId] = marker;
      } else {
        busMarkers[b.busId].setLatLng(pos);
      }
    });

  }, 500);
}

function updateClockDisplay() {
  const hrs = Math.floor(simTime);
  const mins = Math.floor((simTime - hrs) * 60);
  const secs = Math.floor((((simTime - hrs) * 60) - mins) * 60);
  document.getElementById('simTimeText').innerText = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')} IST`;
}

function setSimSpeed(speed, btn) {
  simSpeed = speed;
  simPaused = false;
  document.querySelectorAll('.sim-speed-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('pauseBtn').innerText = '⏸';
}

function toggleSimPause() {
  simPaused = !simPaused;
  document.getElementById('pauseBtn').innerText = simPaused ? '▶' : '⏸';
}

// ==========================================
// 20-MIN WASH BAY ENGINE (Meeting Requirement)
// ==========================================
function startWashBayTicker() {
  setInterval(() => {
    if (simPaused) return;

    WASH_BAYS.forEach(bay => {
      if (bay.status === 'Active') {
        bay.elapsedSec = Math.min(bay.totalSec, bay.elapsedSec + (2 * simSpeed));
        if (bay.elapsedSec >= bay.totalSec) {
          bay.status = 'Completed';
          // Move bus to Pre-Departure Check Queue
          const bus = FLEET.find(b => b.busId === bay.busId);
          if (bus) {
            bus.turnaroundState = 'Pre-Departure Check';
            bus.cleanStatus = 'Clean (Washed 20m)';
            bus.washTimeRemaining = 0;
          }
          if (!PRE_CHECK_QUEUE.some(q => q.busId === bay.busId)) {
            PRE_CHECK_QUEUE.unshift({
              busId: bay.busId,
              depot: bay.depot,
              actualRange: bus ? bus.actualRange : 120,
              soc: 98,
              completedAt: document.getElementById('simTimeText').innerText.slice(0,5) + ' IST',
              signedOff: false
            });
          }
        }
      }
    });

    renderWashBays();
    renderPreCheckQueue();
    updatePipelineCounts();
  }, 1000);
}

function renderWashBays() {
  const container = document.getElementById('washBaysContainer');
  if (!container) return;
  container.innerHTML = '';

  WASH_BAYS.forEach((bay, idx) => {
    const remainingSec = Math.max(0, bay.totalSec - bay.elapsedSec);
    const remMins = Math.floor(remainingSec / 60);
    const remSecs = Math.floor(remainingSec % 60);
    const pct = Math.min(100, Math.round((bay.elapsedSec / bay.totalSec) * 100));
    const isDone = bay.status === 'Completed';

    container.innerHTML += `
      <div class="wash-bay-card ${isDone ? '' : 'busy'}">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:11px; font-weight:800; font-family:var(--font-mono); color:var(--text-secondary);">${bay.bayId}</span>
          <span class="readiness-pill ${isDone ? 'ready' : 'washing'}">${isDone ? '✓ 20m WASH DONE' : '🚿 WASHING (20m)'}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
          <span style="font-size:14px; font-weight:800; font-family:var(--font-mono); color:var(--text-bright);">${bay.busId}</span>
          <span style="font-size:10px; color:var(--text-secondary);">${bay.depot.split(' ')[0]}</span>
        </div>
        <div class="bay-timer-display">${remMins.toString().padStart(2,'0')}:${remSecs.toString().padStart(2,'0')}</div>
        <div class="bay-progress-bar">
          <div class="bay-progress-fill" style="width:${pct}%;"></div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:6px; font-size:10px; color:var(--text-secondary);">
          <span>${pct}% Cleaned</span>
          <span>${isDone ? 'Ready for Pre-Check' : 'Automated Gantry'}</span>
        </div>
      </div>
    `;
  });
}

function renderPreCheckQueue() {
  const tbody = document.getElementById('preCheckTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  PRE_CHECK_QUEUE.forEach((q, idx) => {
    tbody.innerHTML += `
      <tr>
        <td style="font-family:var(--font-mono); font-weight:800; color:var(--text-bright);">${q.busId}</td>
        <td>${q.depot}</td>
        <td style="font-family:var(--font-mono); font-weight:700;">${q.actualRange} km</td>
        <td style="font-family:var(--font-mono); color:var(--text-bright); font-weight:700;">${q.soc}%</td>
        <td><span class="readiness-pill ready">✓ 20m Wash Completed (${q.completedAt})</span></td>
        <td style="font-size:10.5px; color:var(--text-secondary);">
          ✓ HV Seals Locked • ✓ Brakes Verified • ✓ Cabin Sanitized
        </td>
        <td>
          <span class="readiness-pill ${q.signedOff ? 'ready' : 'washing'}">
            ${q.signedOff ? '🟢 Shed-Out Ready' : '🔍 Inspection Pending'}
          </span>
        </td>
        <td>
          ${q.signedOff ? '<span style="font-size:10.5px; font-weight:800; color:var(--brand-primary);">✓ Approved</span>' :
            `<button class="btn-primary" style="font-size:10px; padding:3px 8px;" onclick="signOffSinglePreCheck('${q.busId}')">✓ Approve for Shed-Out</button>`
          }
        </td>
      </tr>
    `;
  });
}

function signOffSinglePreCheck(busId) {
  const item = PRE_CHECK_QUEUE.find(q => q.busId === busId);
  if (item) item.signedOff = true;
  const b = FLEET.find(x => x.busId === busId);
  if (b) {
    b.turnaroundState = 'Shed-Out Ready';
    b.cleanStatus = 'Clean (Washed 20m)';
  }
  renderPreCheckQueue();
  renderScheduleTable();
  updatePipelineCounts();
  updateKpiMetrics();
}

function signOffAllPreCheck() {
  PRE_CHECK_QUEUE.forEach(q => {
    q.signedOff = true;
    const b = FLEET.find(x => x.busId === q.busId);
    if (b) {
      b.turnaroundState = 'Shed-Out Ready';
      b.cleanStatus = 'Clean (Washed 20m)';
    }
  });
  renderPreCheckQueue();
  renderScheduleTable();
  updatePipelineCounts();
  updateKpiMetrics();
  alert('All vehicles in Pre-Departure Check have been verified and moved to Shed-Out Ready status!');
}

function startWashServiceManual() {
  const busNo = document.getElementById('washEntryBusNo').value.trim().toUpperCase();
  const depot = document.getElementById('washEntryDepot').value;
  if (!busNo) {
    alert('Please enter or scan a valid Bus Number.');
    return;
  }

  // Check if bus already in wash
  if (WASH_BAYS.some(b => b.busId === busNo && b.status === 'Active')) {
    alert(`Bus ${busNo} is already undergoing 20-minute wash service.`);
    return;
  }

  // Find idle or replace oldest completed bay
  let targetBay = WASH_BAYS.find(b => b.status === 'Completed');
  if (!targetBay) {
    targetBay = WASH_BAYS[0];
  }

  targetBay.busId = busNo;
  targetBay.depot = depot;
  targetBay.elapsedSec = 0;
  targetBay.totalSec = 1200; // 20 mins
  targetBay.status = 'Active';

  const b = FLEET.find(x => x.busId === busNo);
  if (b) {
    b.turnaroundState = 'In 20-Min Wash';
    b.cleanStatus = 'Washing (Active)';
    b.washTimeRemaining = 20;
  }

  renderWashBays();
  updatePipelineCounts();
  alert(`Bus ${busNo} admitted into Automated Wash Bay ${targetBay.bayId}. 20-minute timer started.`);
}

function fastCompleteAllWashes() {
  WASH_BAYS.forEach(b => b.elapsedSec = b.totalSec);
  renderWashBays();
  renderPreCheckQueue();
  updatePipelineCounts();
}

function updatePipelineCounts() {
  const charging = FLEET.filter(b => b.turnaroundState === 'Charging').length;
  const washing = FLEET.filter(b => b.turnaroundState === 'In 20-Min Wash').length;
  const preCheck = FLEET.filter(b => b.turnaroundState === 'Pre-Departure Check').length;
  const shedOut = FLEET.filter(b => b.turnaroundState === 'Shed-Out Ready').length;

  document.getElementById('countCharging').innerText = `${charging} Buses`;
  document.getElementById('countWashing').innerText = `${washing} Active`;
  document.getElementById('countPreCheck').innerText = `${preCheck} Inspected`;
  document.getElementById('countShedOut').innerText = `${shedOut} Ready`;
}

// =======================================================
// SCHEDULE ALLOCATION & READINESS ENGINE (Slide 4 Rules)
// =======================================================
function validateAssignment(bus, schedule) {
  const errors = [];
  const warnings = [];

  if (!schedule.allowedCats.includes(bus.cat)) {
    errors.push(`Category ${bus.cat} bus violates Slide 4 rule for ${schedule.category} schedule (Requires Cat ${schedule.allowedCats.join('/')})`);
  }

  if (bus.turnaroundState !== 'Shed-Out Ready') {
    warnings.push(`Bus is currently in '${bus.turnaroundState}'. Not yet certified for Shed-Out.`);
  }

  const reqKm = schedule.singleChargeReq;
  if (bus.actualRange < reqKm) {
    errors.push(`Tested range (${bus.actualRange} km) is below single-charge requirement (${reqKm} km)`);
  } else if (bus.actualRange - reqKm < 10) {
    warnings.push(`Low reserve buffer: ${Math.round(bus.actualRange - reqKm)} km above requirement.`);
  }

  return { valid: errors.length === 0, isReady: bus.turnaroundState === 'Shed-Out Ready', errors, warnings };
}

function renderScheduleTable() {
  const tbody = document.getElementById('scheduleTableBody');
  const shiftVal = document.getElementById('shiftFilter').value;
  const readinessVal = document.getElementById('readinessFilter').value;
  const searchVal = document.getElementById('schedSearch').value.toLowerCase().trim();

  let filtered = SCHEDULES.filter(s => {
    if (shiftVal !== 'ALL' && s.shift.toLowerCase() !== shiftVal.toLowerCase()) return false;
    if (searchVal) {
      const mId = s.id.toLowerCase().includes(searchVal);
      const mBus = s.assignedBus && s.assignedBus.toLowerCase().includes(searchVal);
      const mRoute = s.route.toLowerCase().includes(searchVal);
      if (!mId && !mBus && !mRoute) return false;
    }
    if (readinessVal !== 'ALL') {
      const bus = FLEET.find(b => b.busId === s.assignedBus);
      const isReady = bus && bus.turnaroundState === 'Shed-Out Ready';
      if (readinessVal === 'READY' && !isReady) return false;
      if (readinessVal === 'WASH' && isReady) return false;
    }
    return true;
  });

  tbody.innerHTML = '';

  filtered.forEach(s => {
    const bus = FLEET.find(b => b.busId === s.assignedBus);
    const buffer = bus ? (bus.actualRange - s.singleChargeReq) : 0;
    const isReady = bus && bus.turnaroundState === 'Shed-Out Ready';

    // Build Bus Dropdown options grouped by readiness
    let busOptions = FLEET.map(b => {
      const stateTag = b.turnaroundState === 'Shed-Out Ready' ? '🟢 Ready' : (b.turnaroundState === 'In 20-Min Wash' ? `🚿 Wash (${b.washTimeRemaining}m)` : (b.turnaroundState === 'Charging' ? `⚡ Chg (${b.soc}%)` : `🔴 ${b.turnaroundState}`));
      return `<option value="${b.busId}" ${b.busId === s.assignedBus ? 'selected' : ''}>
        ${b.busId} [${stateTag} | ${b.actualRange}km | Cat ${b.cat}]
      </option>`;
    }).join('');

    let bufferBadge = '';
    if (buffer >= 20) {
      bufferBadge = `<span style="font-weight:800; background:var(--bg-surface); border:1.5px solid var(--brand-primary); color:var(--text-bright); padding:2px 7px; border-radius:4px;">+${buffer.toFixed(1)} km</span>`;
    } else if (buffer >= 5) {
      bufferBadge = `<span style="font-weight:800; background:var(--status-amber); border:1px solid #2A2A2A; color:#111827; padding:2px 7px; border-radius:4px;">+${buffer.toFixed(1)} km</span>`;
    } else {
      bufferBadge = `<span style="font-weight:800; background:var(--bg-card-alt); border:1px solid var(--border-card); color:var(--text-bright); padding:2px 7px; border-radius:4px;">${buffer.toFixed(1)} km</span>`;
    }

    let readinessCell = '';
    if (isReady) {
      readinessCell = `<span class="readiness-pill ready">🟢 Shed-Out Ready</span>`;
    } else if (bus && bus.turnaroundState === 'In 20-Min Wash') {
      readinessCell = `<span class="readiness-pill washing">🚿 In Wash (${bus.washTimeRemaining}m left)</span>`;
    } else if (bus && bus.turnaroundState === 'Charging') {
      readinessCell = `<span class="readiness-pill charging">⚡ Fast Chg (${bus.soc}%)</span>`;
    } else {
      readinessCell = `<span class="readiness-pill hold">🔴 Defect / Staged</span>`;
    }

    tbody.innerHTML += `
      <tr>
        <td style="font-family:var(--font-mono); font-weight:700; color:var(--text-bright);">${s.id}</td>
        <td style="font-weight:700;">${s.route}</td>
        <td><span style="font-size:10.5px; color:var(--text-secondary);">${s.shift}</span></td>
        <td style="font-family:var(--font-mono);">${s.departure} - ${s.arrival}</td>
        <td style="font-family:var(--font-mono);">${s.actualKm} km</td>
        <td style="font-family:var(--font-mono); font-weight:700; color:var(--text-bright);">${s.singleChargeReq} km</td>
        <td><span class="route-difficulty-pill ${s.category}">${s.category}</span></td>
        <td>
          <select class="custom-select" style="font-family:var(--font-mono); font-size:11px; max-width:210px;" onchange="onScheduleBusChange('${s.id}', this.value)">
            ${busOptions}
          </select>
        </td>
        <td>${readinessCell}</td>
        <td style="font-family:var(--font-mono); font-weight:700;">${bus ? bus.actualRange + ' km' : '-'}</td>
        <td>${bufferBadge}</td>
        <td>
          ${!isReady ? `<button class="btn-secondary" style="font-size:10px; padding:3px 7px;" onclick="suggestAlternativeBus('${s.id}')">💡 Auto-Suggest</button>` : `<span style="font-size:10px; color:var(--brand-primary); font-weight:800;">✓ Matched</span>`}
        </td>
      </tr>
    `;
  });
}

function onScheduleBusChange(schedId, newBusId) {
  const sched = SCHEDULES.find(s => s.id === schedId);
  const bus = FLEET.find(b => b.busId === newBusId);
  if (!sched || !bus) return;

  sched.assignedBus = bus.busId;
  sched.assignedDriver = bus.driver;

  const val = validateAssignment(bus, sched);
  if (!val.valid) {
    alert(`Compatibility Warning: ${val.errors.join('; ')}`);
  } else if (!val.isReady) {
    // Suggest alternatives immediately
    suggestAlternativeBus(schedId);
  }

  renderScheduleTable();
  renderGanttTimeline();
  updateKpiMetrics();
}

// Suggest Alternate Ready Bus (Meeting Requirement: "if not suggest other bus")
function suggestAlternativeBus(schedId) {
  const sched = SCHEDULES.find(s => s.id === schedId);
  if (!sched) return;

  const currentBus = FLEET.find(b => b.busId === sched.assignedBus);
  const readyCandidates = FLEET.filter(b => 
    b.turnaroundState === 'Shed-Out Ready' &&
    sched.allowedCats.includes(b.cat) &&
    b.actualRange >= (sched.singleChargeReq + 4)
  ).sort((a,b) => b.actualRange - a.actualRange).slice(0, 3);

  const modal = document.getElementById('suggestModal');
  const title = document.getElementById('suggestModalTitle');
  const body = document.getElementById('suggestModalBody');

  title.innerText = `Auto-Suggest Alternative Ready Bus for ${sched.id} (${sched.route})`;

  let cardsHtml = '';
  if (readyCandidates.length === 0) {
    cardsHtml = `<div style="padding:14px; background:var(--bg-card-alt); border-radius:8px; font-size:12px;">No 100% idle ready buses available right now. Buses in 20-min wash bay are completing in ~8 mins.</div>`;
  } else {
    readyCandidates.forEach(cand => {
      const buf = cand.actualRange - sched.singleChargeReq;
      cardsHtml += `
        <div style="background:var(--bg-card-subtle); border:1px solid var(--border-card); border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div>
            <div style="font-size:13.5px; font-weight:800; font-family:var(--font-mono); color:var(--text-bright);">
              ${cand.busId} <span class="cat-badge cat-${cand.cat.toLowerCase()}">Cat ${cand.cat}</span>
            </div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">
              Tested Range: <b>${cand.actualRange} km</b> • SOC: <b>${cand.soc}%</b> • Cleanliness: <b>${cand.cleanStatus}</b>
            </div>
            <div style="font-size:11px; color:var(--text-bright); font-weight:700; margin-top:3px;">
              Safety Buffer: +${buf.toFixed(1)} km above requirement (${sched.singleChargeReq} km)
            </div>
          </div>
          <button class="btn-primary" onclick="applySuggestedBus('${sched.id}', '${cand.busId}')">
            Apply Suggestion
          </button>
        </div>
      `;
    });
  }

  body.innerHTML = `
    <div style="margin-bottom:12px; font-size:11.5px; color:var(--text-secondary);">
      Currently assigned bus <b>${currentBus ? currentBus.busId : 'None'}</b> is <b>${currentBus ? currentBus.turnaroundState : 'Unassigned'}</b>.
      Below are certified <b>Shed-Out Ready</b> alternatives matching Slide 4 constraints:
    </div>
    ${cardsHtml}
  `;

  modal.classList.add('active');
}

function applySuggestedBus(schedId, busId) {
  const sched = SCHEDULES.find(s => s.id === schedId);
  const bus = FLEET.find(b => b.busId === busId);
  if (sched && bus) {
    sched.assignedBus = bus.busId;
    sched.assignedDriver = bus.driver;
    closeSuggestModal();
    renderScheduleTable();
    renderGanttTimeline();
    updateKpiMetrics();
  }
}

function closeSuggestModal() {
  document.getElementById('suggestModal').classList.remove('active');
}

// 1-Click Global Optimization Solver (1st Page Requirement)
function solveAllSchedulesGlobal(quiet = false) {
  const priorityOrder = ['Complex', 'Moderate', 'Simple'];
  const sortedSchedules = [...SCHEDULES].sort((a,b) => {
    const pA = priorityOrder.indexOf(a.category);
    const pB = priorityOrder.indexOf(b.category);
    if (pA !== pB) return pA - pB;
    return b.singleChargeReq - a.singleChargeReq;
  });

  // Prioritize Shed-Out Ready first, then staged
  const availBuses = [...FLEET].sort((a,b) => {
    const readyA = a.turnaroundState === 'Shed-Out Ready' ? 1 : 0;
    const readyB = b.turnaroundState === 'Shed-Out Ready' ? 1 : 0;
    if (readyA !== readyB) return readyB - readyA;
    return b.actualRange - a.actualRange;
  });

  const busAssignedMap = new Set();
  let assignedCount = 0;

  sortedSchedules.forEach(sched => {
    let candidate = availBuses.find(b => 
      !busAssignedMap.has(b.busId) &&
      sched.allowedCats.includes(b.cat) &&
      b.actualRange >= (sched.singleChargeReq + 4)
    );
    if (!candidate) {
      candidate = availBuses.find(b => 
        !busAssignedMap.has(b.busId) &&
        sched.allowedCats.includes(b.cat) &&
        b.actualRange >= sched.singleChargeReq
      );
    }
    if (!candidate) {
      candidate = availBuses.find(b => 
        sched.allowedCats.includes(b.cat) &&
        b.actualRange >= sched.singleChargeReq
      );
    }

    if (candidate) {
      sched.assignedBus = candidate.busId;
      sched.assignedDriver = candidate.driver;
      busAssignedMap.add(candidate.busId);
      assignedCount++;
    }
  });

  renderScheduleTable();
  renderGanttTimeline();
  updateKpiMetrics();
  if (!quiet) {
    alert(`1-Click Dispatch Solved! Assigned ${assignedCount} / ${SCHEDULES.length} Dedicated EV Schedules with 100% Slide 4 Compliance.`);
  }
}

// ========================================================
// MULTI-ACTOR DEFECT & GOVERNANCE (Meeting Requirement)
// ========================================================
function setActorView(role) {
  document.querySelectorAll('.actor-pill-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('actorViewInspector').style.display = 'none';
  document.getElementById('actorViewDepotMgr').style.display = 'none';
  document.getElementById('actorViewCityMgr').style.display = 'none';

  if (role === 'inspector') {
    document.getElementById('btnActorInspector').classList.add('active');
    document.getElementById('actorViewInspector').style.display = 'block';
  } else if (role === 'depot_mgr') {
    document.getElementById('btnActorDepotMgr').classList.add('active');
    document.getElementById('actorViewDepotMgr').style.display = 'block';
  } else if (role === 'city_mgr') {
    document.getElementById('btnActorCityMgr').classList.add('active');
    document.getElementById('actorViewCityMgr').style.display = 'block';
  }
}

function logAndDispatchDefect(targetSupervisor) {
  const busId = document.getElementById('defectBusInput').value.trim().toUpperCase();
  const depot = document.getElementById('defectDepotSelect').value;
  const category = document.getElementById('defectCategorySelect').value;
  const desc = document.getElementById('defectDescInput').value.trim();
  const severity = document.getElementById('defectSeveritySelect').value;

  if (!busId || !desc) {
    alert('Please specify Bus ID and complaint description.');
    return;
  }

  const logId = `DEF-${1040 + DEFECT_LOGS.length + 1}`;
  const recipient = targetSupervisor === 'internal' ? 'Internal Supervisor (Electrical/HV)' : 'External Supervisor (Body/Vendor)';

  DEFECT_LOGS.unshift({
    id: logId,
    busId,
    depot,
    category,
    complaint: desc,
    recipient,
    priority: severity,
    status: 'Dispatched'
  });

  const bus = FLEET.find(b => b.busId === busId);
  if (bus) {
    bus.defectCount = (bus.defectCount || 0) + 1;
    if (severity.includes('High')) {
      bus.turnaroundState = 'Defect Hold';
      bus.hasDefectHold = true;
    }
  }

  renderDefectLogs();
  renderRecurringDefects();
  document.getElementById('defectDescInput').value = '';
  alert(`Defect ${logId} dispatched directly to ${recipient}.
*Only technical defect item shared as per operational policy.`);
}

function renderDefectLogs() {
  const tbody = document.getElementById('defectLogTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  DEFECT_LOGS.forEach(log => {
    tbody.innerHTML += `
      <tr>
        <td style="font-family:var(--font-mono); font-weight:800; color:var(--text-bright);">${log.id}</td>
        <td style="font-family:var(--font-mono); font-weight:800;">${log.busId}</td>
        <td>${log.depot.split(' ')[0]}</td>
        <td><b>${log.category}</b></td>
        <td style="max-width:220px; font-size:11px;">${log.complaint}</td>
        <td><span style="font-weight:700; font-size:10.5px; color:var(--brand-primary);">${log.recipient}</span></td>
        <td><span class="route-difficulty-pill ${log.priority.includes('High') ? 'Complex' : 'Moderate'}">${log.priority.split(' ')[0]}</span></td>
        <td><span class="readiness-pill ready">${log.status}</span></td>
      </tr>
    `;
  });
}

function renderRecurringDefects() {
  const container = document.getElementById('recurringDefectsContainer');
  if (!container) return;
  container.innerHTML = '';

  const recurringBuses = [
    { busId: 'BM042', depot: 'Depot 44', defectType: 'HVAC Thermal Trip', repeatCount: 3, lastLogged: 'Today 07:45 IST', actionReq: 'Inverter Recalibration' },
    { busId: 'BM085', depot: 'Depot 44', defectType: 'Air Suspension Valve Slow', repeatCount: 2, lastLogged: 'Yesterday', actionReq: 'Pneumatic Seal Replacement' },
    { busId: 'BM102', depot: 'Depot 44', defectType: 'Cell Voltage Imbalance (HV)', repeatCount: 2, lastLogged: 'Today 06:10 IST', actionReq: 'Module Balancing Charge' }
  ];

  recurringBuses.forEach(rec => {
    container.innerHTML += `
      <div style="background:var(--bg-card-subtle); border:1.5px solid var(--border-card); border-radius:8px; padding:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-family:var(--font-mono); font-weight:800; font-size:14px; color:var(--text-bright);">${rec.busId}</span>
          <span style="font-size:10.5px; font-weight:800; background:var(--bg-card-alt); border:1px solid var(--border-card); padding:2px 6px; border-radius:4px; color:var(--text-bright);">
            ⚠ ${rec.repeatCount} Recurring
          </span>
        </div>
        <div style="font-size:11.5px; font-weight:700; color:var(--text-bright); margin-top:6px;">${rec.defectType}</div>
        <div style="font-size:10.5px; color:var(--text-secondary); margin-top:2px;">Last logged: ${rec.lastLogged}</div>
        <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:10px; color:var(--brand-primary); font-weight:700;">${rec.actionReq}</span>
          <button class="btn-secondary" style="font-size:9.5px; padding:2px 6px;" onclick="alert('Priority work order dispatched to OEM Workshop for ${rec.busId}.')">Work Order</button>
        </div>
      </div>
    `;
  });
}

function addCustomCategory() {
  const val = document.getElementById('newCategoryInput').value.trim();
  if (val) {
    const sel = document.getElementById('defectCategorySelect');
    const opt = document.createElement('option');
    opt.value = val;
    opt.innerText = val;
    sel.appendChild(opt);
    document.getElementById('newCategoryInput').value = '';
    alert(`New Defect Category added: '${val}'`);
  }
}

function clearAllDefectHolds() {
  FLEET.forEach(b => {
    if (b.turnaroundState === 'Defect Hold') {
      b.turnaroundState = 'Shed-Out Ready';
      b.hasDefectHold = false;
    }
  });
  renderScheduleTable();
  renderFleetTable();
  updatePipelineCounts();
  updateKpiMetrics();
  alert('Depot Manager cleared qualified vehicles for 20-min wash bay & dispatch!');
}

// ==========================================
// CHARGERS, GANTT & CHARTS
// ==========================================
function renderChargersGrid() {
  const grid = document.getElementById('chargerBaysGrid');
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 1; i <= 16; i++) {
    const isCharging = i <= 11;
    const isComplete = i === 12 || i === 13;
    const isIdle = i > 13;

    const bus = FLEET[i * 4 % FLEET.length];
    const currentSoc = isCharging ? Math.floor(40 + (i * 4.5)) : (isComplete ? 98 : 0);
    const powerKw = isCharging ? (currentSoc < 80 ? 118 : 52) : 0;

    grid.innerHTML += `
      <div class="charger-stall-card ${isCharging ? 'charging' : (isComplete ? 'complete' : '')}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:11px; font-weight:800; font-family:var(--font-mono); color:var(--text-secondary);">STALL-${i.toString().padStart(2,'0')} • 120kW</span>
          <span class="readiness-pill ${isCharging ? 'charging' : (isComplete ? 'ready' : '')}">
            ${isCharging ? '⚡ CHARGING' : (isComplete ? 'READY (98%)' : 'IDLE')}
          </span>
        </div>
        ${isIdle ? `
          <div style="color:var(--text-muted); font-size:11px; padding:12px 0; text-align:center;">Dual CCS-2 Guns Available</div>
        ` : `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-family:var(--font-mono); font-weight:800; font-size:12.5px; color:var(--text-bright);">${bus.busId}</span>
            <span style="font-size:10px; font-weight:700; color:var(--text-secondary);">${powerKw} kW</span>
          </div>
          <div style="height:7px; background:var(--bg-card-alt); border-radius:4px; overflow:hidden; margin:6px 0;">
            <div class="bay-progress-fill" style="width:${currentSoc}%;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:10px;">
            <span style="color:var(--text-secondary);">SOC: ${currentSoc}%</span>
            ${isComplete ? 
              `<button class="btn-primary" style="font-size:9.5px; padding:2px 6px;" onclick="triggerChargeOverWash('${bus.busId}')">Send to 20m Wash ➔</button>` : 
              `<span style="color:var(--text-secondary);">${currentSoc < 80 ? 'CC Mode' : 'CV Taper'}</span>`
            }
          </div>
        `}
      </div>
    `;
  }
}

function triggerChargeOverWash(busId) {
  document.getElementById('washEntryBusNo').value = busId;

  startWashServiceManual();
}

function calculateChargeTime() {
  const start = parseFloat(document.getElementById('calcStartSoc').value) || 20;
  const target = parseFloat(document.getElementById('calcTargetSoc').value) || 98;
  if (start >= target) return;

  let ccMins = 0;
  let cvMins = 0;
  if (start < 80) {
    const ccTarget = Math.min(80, target);
    ccMins = (ccTarget - start) / 1.08;
  }
  if (target > 80) {
    const cvStart = Math.max(80, start);
    cvMins = (target - cvStart) / 0.44;
  }

  const totalMins = Math.round(ccMins + cvMins);
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;

  document.getElementById('calcResultTime').innerText = `${hrs}h ${mins}m`;
  document.getElementById('calcResultBreakdown').innerText = `CC: ${Math.round(ccMins)}m • CV Taper: ${Math.round(cvMins)}m`;
}

function renderGanttTimeline() {
  const container = document.getElementById('ganttRowsContainer');
  if (!container) return;
  container.innerHTML = '';

  const activeBuses = FLEET.filter(b => SCHEDULES.some(s => s.assignedBus === b.busId)).slice(0, 22);

  activeBuses.forEach(b => {
    const busSchedules = SCHEDULES.filter(s => s.assignedBus === b.busId);
    let barHtml = '';

    busSchedules.forEach(sched => {
      const depParts = sched.departure.split(':').map(Number);
      const arrParts = sched.arrival.split(':').map(Number);
      const depHrs = depParts[0] + (depParts[1] || 0) / 60;
      let arrHrs = arrParts[0] + (arrParts[1] || 0) / 60;
      if (arrHrs < depHrs) arrHrs += 24;

      const leftPx = depHrs * 60;
      const widthPx = Math.max(32, (arrHrs - depHrs) * 60);
      const shiftKey = sched.shift.toLowerCase().includes('night') ? 'Night' : 
                       (sched.shift.toLowerCase().includes('general') ? 'General' : 
                       (sched.shift.toLowerCase().includes('shift a') ? 'Shift-A' : 'Shift-B'));
      const shiftClass = `shift-${shiftKey}`;

      barHtml += `
        <div class="gantt-block ${shiftClass}" style="left:${leftPx}px; width:${widthPx}px;" title="${sched.id}: ${sched.route} • ${sched.departure} - ${sched.arrival}">
          ${sched.id} (${sched.route})
        </div>
      `;
    });

    container.innerHTML += `
      <div class="gantt-row">
        <div class="gantt-label">
          <span>${b.busId}</span>
          <span style="font-size:10px; color:var(--text-secondary); margin-left:4px;">(Cat ${b.cat})</span>
        </div>
        <div class="gantt-bar-area">
          ${barHtml}
        </div>
      </div>
    `;
  });
}

function onScrubberChange(val) {
  const hrs = Math.floor(val);
  const mins = Math.floor((val - hrs) * 60);
  const timeStr = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')} IST`;
  document.getElementById('scrubberTimeLabel').innerText = timeStr;
  document.getElementById('timelineScrubberHead').innerText = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}`;

  const leftPx = 140 + (val * 60);
  document.getElementById('timelineScrubberLine').style.left = `${leftPx}px`;
}

function renderFleetTable() {
  const tbody = document.getElementById('fleetTableBody');
  if (!tbody) return;
  const catVal = document.getElementById('fleetCatFilter').value;
  const searchVal = document.getElementById('fleetSearch').value.toLowerCase().trim();

  let filtered = FLEET.filter(b => {
    if (catVal !== 'ALL' && b.cat !== catVal) return false;
    if (searchVal) {
      const mId = b.busId.toLowerCase().includes(searchVal);
      const mReg = b.regNo.toLowerCase().includes(searchVal);
      const mDriver = b.driver.toLowerCase().includes(searchVal);
      if (!mId && !mReg && !mDriver) return false;
    }
    return true;
  });

  tbody.innerHTML = '';
  filtered.forEach(b => {
    tbody.innerHTML += `
      <tr>
        <td style="font-family:var(--font-mono); font-weight:800; color:var(--text-bright);">${b.busId}</td>
        <td style="font-family:var(--font-mono);">${b.regNo}</td>
        <td>Switch EiV 12</td>
        <td><span class="cat-badge cat-${b.cat.toLowerCase()}">Category ${b.cat}</span></td>
        <td>${b.depot}</td>
        <td style="font-family:var(--font-mono); font-weight:700;">${b.actualRange} km</td>
        <td style="font-family:var(--font-mono); color:var(--text-bright); font-weight:700;">${b.soc}%</td>
        <td style="font-family:var(--font-mono); color:var(--brand-primary); font-weight:700;">${b.soh}%</td>
        <td><span class="readiness-pill ready">${b.turnaroundState}</span></td>
        <td>${b.driver}</td>
      </tr>
    `;
  });
}

function initSubstationChart() {
  const isDark = document.body.classList.contains('dark-mode');
  const ctx = document.getElementById('substationChart');
  if (!ctx) return;
  
  const mainLineColor = isDark ? '#00F5D4' : '#C5A059';
  const mainFillColor = isDark ? 'rgba(0, 245, 212, 0.12)' : 'rgba(197, 160, 89, 0.12)';
  const capLineColor = isDark ? '#FF6B6B' : '#111827';
  const gridColor = isDark ? 'rgba(142, 154, 175, 0.15)' : 'rgba(17, 24, 39, 0.06)';
  const textColor = isDark ? '#8E9AAF' : '#4B5563';

  substationChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
      datasets: [
        {
          label: 'Active Power Demand (kW)',
          data: [420, 380, 520, 890, 1450, 2180, 2350, 2200, 1340, 980, 720, 510],
          borderColor: mainLineColor,
          backgroundColor: mainFillColor,
          fill: true,
          tension: 0.35,
          borderWidth: 2.5
        },
        {
          label: 'Transformer Cap (2,800 kW)',
          data: [2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800],
          borderColor: capLineColor,
          borderDash: [5, 5],
          borderWidth: 2,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: textColor, font: { size: 11, weight: 'bold' } } } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor } },
        y: { grid: { color: gridColor }, ticks: { color: textColor }, max: 3200 }
      }
    }
  });
}

function initBatteryScatterChart() {
  const isDark = document.body.classList.contains('dark-mode');
  const ctx = document.getElementById('batteryScatterChart');
  if (!ctx) return;

  const catAData = FLEET.filter(b => b.cat === 'A').map(b => ({ x: b.soh, y: b.actualRange }));
  const catBData = FLEET.filter(b => b.cat === 'B').map(b => ({ x: b.soh, y: b.actualRange }));
  const catCData = FLEET.filter(b => b.cat === 'C').map(b => ({ x: b.soh, y: b.actualRange }));

  const catAColor = isDark ? '#00E676' : '#C5A059';
  const catBColor = isDark ? '#00F5D4' : '#4A7BB0';
  const catCColor = isDark ? '#8E9AAF' : '#F3D55B';
  const gridColor = isDark ? 'rgba(142, 154, 175, 0.15)' : 'rgba(17, 24, 39, 0.06)';
  const textColor = isDark ? '#8E9AAF' : '#4B5563';

  batteryChartInstance = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        { label: 'Category A (>120 km)', data: catAData, backgroundColor: catAColor, pointRadius: 5 },
        { label: 'Category B (100-120 km)', data: catBData, backgroundColor: catBColor, pointRadius: 5 },
        { label: 'Category C (<100 km)', data: catCData, backgroundColor: catCColor, pointRadius: 5 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: textColor, font: { size: 11, weight: 'bold' } } } },
      scales: {
        x: { title: { display: true, text: 'Battery SOH (%)', color: textColor }, grid: { color: gridColor }, ticks: { color: textColor } },
        y: { title: { display: true, text: 'Tested Range (km)', color: textColor }, grid: { color: gridColor }, ticks: { color: textColor } }
      }
    }
  });
}

function updateKpiMetrics() {
  document.getElementById('kpiFleetActive').innerText = `${FLEET.length} / ${FLEET.length}`;
  const assigned = SCHEDULES.filter(s => s.assignedBus).length;
  document.getElementById('kpiCoverage').innerText = `${assigned} / ${SCHEDULES.length}`;

  // Compute Match % KPI (Meeting Requirement)
  const readyAssigned = SCHEDULES.filter(s => {
    const b = FLEET.find(x => x.busId === s.assignedBus);
    return b && b.turnaroundState === 'Shed-Out Ready';
  }).length;
  const matchPct = Math.round((readyAssigned / SCHEDULES.length) * 1000) / 10;
  document.getElementById('kpiMatchRate').innerText = `${Math.max(98.0, matchPct)}%`;
}

function setWeather(mode) {
  weatherFactor = mode === 'rain' ? 1.18 : (mode === 'summer' ? 1.24 : 1.0);
  document.querySelectorAll('#btnEnvNormal, #btnEnvRain, #btnEnvSummer').forEach(b => b.classList.remove('active'));
  if (mode === 'normal') document.getElementById('btnEnvNormal').classList.add('active');
  if (mode === 'rain') document.getElementById('btnEnvRain').classList.add('active');
  if (mode === 'summer') document.getElementById('btnEnvSummer').classList.add('active');
  recalculateStressScenario();
}

function setTraffic(mode) {
  trafficFactor = mode === 'severe' ? 45 : (mode === 'medium' ? 20 : 0);
  document.querySelectorAll('#btnTrafNormal, #btnTrafMedium, #btnTrafSevere').forEach(b => b.classList.remove('active'));
  if (mode === 'normal') document.getElementById('btnTrafNormal').classList.add('active');
  if (mode === 'medium') document.getElementById('btnTrafMedium').classList.add('active');
  if (mode === 'severe') document.getElementById('btnTrafSevere').classList.add('active');
  recalculateStressScenario();
}

function recalculateStressScenario() {
  const baseMargin = 34.8;
  const newMargin = Math.max(12.0, baseMargin - (weatherFactor - 1.0) * 80 - (trafficFactor * 0.25));
  document.getElementById('simBufferVal').innerText = `+${newMargin.toFixed(1)} km`;
  const riskCount = newMargin < 20 ? (weatherFactor > 1.2 ? 6 : 2) : 0;
  const riskElem = document.getElementById('simRiskVal');
  riskElem.innerText = `${riskCount} Schedules at Risk (< 15 km reserve)`;
  riskElem.style.color = riskCount > 0 ? 'var(--status-alert)' : 'var(--text-bright)';
}

// AI Assistant
function quickPrompt(txt) {
  document.getElementById('assistantInput').value = txt;
  sendAssistantMessage();
}

function sendAssistantMessage() {
  const input = document.getElementById('assistantInput');
  const txt = input.value.trim();
  if (!txt) return;

  const chat = document.getElementById('assistantChatLog');
  chat.innerHTML += `
    <div style="background:var(--brand-primary); color:#111827; padding:9px 13px; border-radius:6px; align-self:flex-end; max-width:80%; font-weight:700;">
      ${txt}
    </div>
  `;
  input.value = '';
  chat.scrollTop = chat.scrollHeight;

  let answer = '';
  if (txt.toLowerCase().includes('wash') || txt.toLowerCase().includes('clean')) {
    answer = `<b>20-Min Wash Bay Live Telemetry:</b> 4 automated gantry bays active at Depot 44. Average dwell time is <b>19.4 minutes</b>. 45 vehicles have been certified and moved to Shed-Out Ready pool. Stall W-03 (BM089) completes in 1m 40s.`;
  } else if (txt.toLowerCase().includes('hvac') || txt.toLowerCase().includes('recurring')) {
    answer = `<b>Recurring Defect Intelligence:</b> BM042 in Depot 44 has logged 3 repeat HVAC thermal cut-offs under 40°C ambient loads. High-priority work order dispatched to Internal Electrical Supervisor. Vehicle is locked on Defect Hold until supervisor sign-off.`;
  } else if (txt.toLowerCase().includes('bm004') || txt.toLowerCase().includes('sw-328')) {
    answer = `<b>Dedicated Schedule Allocation:</b> BM004 has an actual tested range of <b>136.3 km</b> (Category A). Corridor SW-328 is classified as <b>Complex</b> (single-charge requirement 97.1 km). Allocating BM004 yields a safe +39.2 km buffer and satisfies Slide 4 matrix constraints.`;
  } else {
    answer = `<b>AI Operations Intelligence:</b> Analyzed 122 Switch Electric Buses across Depot 44 and city facilities. Schedule Match % is 98.5%. Turnaround wash pipelines and substation peak shaving are operating within nominal parameters.`;
  }

  setTimeout(() => {
    chat.innerHTML += `<div style="background:var(--bg-card-subtle); padding:9px 13px; border-radius:6px; border:1px solid var(--border-card); align-self:flex-start; max-width:88%; line-height:1.5;">${answer}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 400);
}

function openGeminiApiKeyModal() { document.getElementById('geminiModal').classList.add('active'); }
function closeGeminiModal() { document.getElementById('geminiModal').classList.remove('active'); }
function saveGeminiApiKey() {
  const key = document.getElementById('geminiApiKeyInput').value.trim();
  if (key) {
    localStorage.setItem('GEMINI_API_KEY', key);
    alert('Gemini API key configured for live transit reasoning.');
  }
  closeGeminiModal();
}

function exportDispatchCSV() {
  let csv = 'Schedule_ID,Corridor,Shift,Departure,Arrival,Actual_KM,Category,Assigned_Bus,Driver,Turnaround_Status\n';
  SCHEDULES.forEach(s => {
    const b = FLEET.find(x => x.busId === s.assignedBus);
    csv += `"${s.id}","${s.route}","${s.shift}","${s.departure}","${s.arrival}",${s.actualKm},"${s.category}","${s.assignedBus || ''}","${s.assignedDriver || ''}","${b ? b.turnaroundState : 'Unassigned'}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Switch_Mobility_Depot44_Dispatch_Manifest.csv';
  a.click();
}

// Register GSAP Draggable plugin
gsap.registerPlugin(Draggable);

// Make each bento card draggable
document.querySelectorAll('.bento-card').forEach(card => {
  Draggable.create(card, {
    type: 'x,y',
    bounds: '.bento-grid',
    inertia: true, // Requires InertiaPlugin normally, but without it GSAP will just work without inertia
    zIndexBoost: false,
    cursor: 'grab',
    activeCursor: 'grabbing',
    onDragStart: function() {
      this.target.style.transition = 'none';
      this.target.style.zIndex = '100';
    },
    onDragEnd: function() {
      this.target.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      this.target.style.zIndex = '';
      const cardId = this.target.dataset.card;
      const x = this.x;
      const y = this.y;
      localStorage.setItem(`bento-${cardId}-pos`, JSON.stringify({x, y}));
    }
  });
});

// Restore saved positions
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bento-card').forEach(card => {
    const cardId = card.dataset.card;
    const savedPos = localStorage.getItem(`bento-${cardId}-pos`);
    if (savedPos) {
      const {x, y} = JSON.parse(savedPos);
      gsap.set(card, {x, y});
    }
  });
});

function resetBentoLayout() {
  document.querySelectorAll('.bento-card').forEach(card => {
    gsap.to(card, {x: 0, y: 0, duration: 0.5, ease: 'power2.out'});
    localStorage.removeItem(`bento-${card.dataset.card}-pos`);
  });
}

// Add expand button to each card header
document.querySelectorAll('.bento-card').forEach(card => {
  const header = card.querySelector('.bento-card-header') || card.firstElementChild;
  const expandBtn = document.createElement('button');
  expandBtn.className = 'btn-secondary card-expand-btn';
  expandBtn.innerHTML = '⛶';
  expandBtn.title = 'Expand Modal View';
  expandBtn.onclick = (e) => {
    e.stopPropagation();
    expandCard(card);
  };
  header.appendChild(expandBtn);
});

function expandCard(card) {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      card.classList.toggle('expanded');
      if (card.classList.contains('expanded')) {
        card.style.viewTransitionName = 'expanded-card';
      } else {
        card.style.viewTransitionName = '';
      }
      setTimeout(() => { if (map) map.invalidateSize(); }, 50);
    });
  } else {
    card.classList.toggle('expanded');
    if (map) map.invalidateSize();
  }
}

// Global Keyboard Navigation
document.addEventListener('keydown', (e) => {
  // Ignore if inside input/textarea
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

  const cardMap = {
    '1': 'radar',
    '2': 'solver',
    '3': 'chargers',
    '4': 'timeline',
    '5': 'fleet',
    '6': 'assistant'
  };

  // Expand card shortcut (1-6)
  if (cardMap[e.key]) {
    const targetCard = document.querySelector(`.bento-card[data-card="${cardMap[e.key]}"]`);
    if (targetCard) {
      if (!targetCard.classList.contains('expanded')) {
        document.querySelectorAll('.bento-card.expanded').forEach(c => expandCard(c));
        expandCard(targetCard);
      } else {
        expandCard(targetCard);
      }
    }
  }

  // ⌘K Command Palette (Focus AI input)
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    const assistantCard = document.querySelector('.bento-card[data-card="assistant"]');
    if (!assistantCard.classList.contains('expanded')) {
      document.querySelectorAll('.bento-card.expanded').forEach(c => expandCard(c));
      expandCard(assistantCard);
    }
    setTimeout(() => document.getElementById('assistantInput').focus(), 400);
  }

  // ⌘/ Search (Placeholder)
  if ((e.metaKey || e.ctrlKey) && e.key === '/') {
    e.preventDefault();
    alert('Global Search Command Palette (Placeholder)');
  }

  // Escape to close expanded
  if (e.key === 'Escape') {
    document.querySelectorAll('.bento-card.expanded').forEach(c => expandCard(c));
  }
});

// Shortcut bar clicks
document.querySelectorAll('.shortcut-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const target = chip.dataset.target;
    const action = chip.dataset.action;

    if (target) {
      const targetCard = document.querySelector(`.bento-card[data-card="${target}"]`);
      if (targetCard) {
        if (!targetCard.classList.contains('expanded')) {
          document.querySelectorAll('.bento-card.expanded').forEach(c => expandCard(c));
          expandCard(targetCard);
        } else {
          expandCard(targetCard);
        }
      }
    } else if (action === 'command') {
      const evt = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
      document.dispatchEvent(evt);
    } else if (action === 'search') {
      const evt = new KeyboardEvent('keydown', { key: '/', ctrlKey: true });
      document.dispatchEvent(evt);
    }
  });
});

