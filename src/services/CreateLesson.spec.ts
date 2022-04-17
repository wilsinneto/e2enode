import { InMemoryLessonsRepository } from "../../test/repositories/InMemoryLessonsRepository";
import { CreateLesson } from "./CreateLesson";

test("create lesson", async () => {
  const inMemoryLessonsRepository = new InMemoryLessonsRepository();
  const createLesson = new CreateLesson(inMemoryLessonsRepository);

  await expect(
    createLesson.execute({ title: "Nova aula" })
  ).resolves.not.toThrow();

  expect(inMemoryLessonsRepository.items).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: "Nova aula",
      }),
    ])
  );
});
