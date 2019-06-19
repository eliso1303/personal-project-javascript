import { Validate } from './validate';

export class GradebooksModel {
    constructor(groups, teachers, lms) {
        this.grades = new Map();
        this.groups = { groups };
        this.teachers = { teachers };
        this.lms = { lms };
    }

    add(level, gradeId) {
        if (typeof level === 'number' && typeof gradeId === 'string') {
            let gradeId = Math.random().toString(36).substr(2, 8);
            this.grades.set(gradeId, { level, gradeId })
            return gradeId;
        } else {
            throw new Error('validation error');
        }
    }
    clear(parameter) {
        if (parameter) {
            throw new Error("please don't pass the parameters");
        } else {
            this.grades.clear();
        }
    }

    addRecord(gradebookId, record) {
        if (this.groups.get("id") === gradebookId) {
            this.grades.set("records", record);
        } else {
            throw new Error("error");
        }


    }

    read(gradebookId, pupilId) {
        this.grades.get(gradebookId);
    }

    readAll(gradebookId) {
        if (this.groups.get("id") == gradebookId) {
            return Array.from(this.groups);
        } else {
            throw new Error("error");
        }
    }
}