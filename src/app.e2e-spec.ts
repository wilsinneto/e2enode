import request from "supertest";
import { app } from "./app";

test("[e2e] CreateLesson", async () => {
  const response = await request(app).post("/lessons").send({
    title: "Nova Aula",
    description: "Test Description",
  });

  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();
});
