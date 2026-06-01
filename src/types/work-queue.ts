export type WorkQueueFilter = 
  | "ALL"
  | "PENDING"
  | "MATCHING"
  | "ASSIGNED"
  | "ACTIVE"
  | "COMPLETED";

  export type WorkQueueSort =
  | "REQUESTED_AT_DESC"
  | "REQUESTED_AT_ASC"
  | "SERVICE_NUMBER_ASC"
  | "SERVICE_NUMBER_DESC";