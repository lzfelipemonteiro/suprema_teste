import { randomUUID } from "crypto";

export function addUUID(data: Object): Object {
  return { ...data, id: randomUUID() };
}