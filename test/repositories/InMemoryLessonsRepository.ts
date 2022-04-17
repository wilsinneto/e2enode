import { Lesson } from "@prisma/client";
import crypto from "crypto";
import { CreateLessonData, LessonsRepository } from "../../src/repositories/LessonsRepository";


export class InMemoryLessonsRepository implements LessonsRepository {
  public items: Lesson[] = [];

  async create(data: CreateLessonData): Promise<void> {
    this.items.push({
      id: crypto.randomBytes(16).toString("hex"),
      title: data.title,
      description: data.description ?? null,
    });
  }
}