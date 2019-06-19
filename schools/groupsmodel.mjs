import { Validate } from './validate';

export class GroupsModel {
    constructor() {
        this.groups = new Map();
        this.schema = {
            "name": {
                "first": "string",
                "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "phones": [
                {
                    "phone": "string",
                    "primary": "boolean"
                }
            ],
            "sex": "string", // male OR female
            "description": "string"
        }
    }

    add(roomNum) {
        if (typeof roomNum === "number") {
            let id = '_' + Math.random().toString(36).substr(2, 9);
            this.groups.set("id",id);
            this.groups.set("room",room);
            return this.groups.get("id");
        }
        else {
            throw new Error("room must have a number!");
        }

    }

    addPupil(groupId, pupil) {
        if (typeof groupId === "string" && Validate.validation(pupil, this.schema)) {
            if (this.groups.has(groupId)) {
                this.groups.set("pupil", pupil);
                return this.groups;
            }
            else {
                throw new Error("there is no such group");
            }
        }
        else {
            throw new Error("validation problem");
        }
    }

    update(groupId, obj) {
        if (typeof groupId === "string" && typeof obj === "object") {
            if (this.groups.get("id") == groupId) {
                for (i of obj) {
                    this.groups.set(i);
                }
            }
            else {
                throw new Error("oops!");
            }
        }
        else {
            throw new Error("validation problem");
        }

    }

    read(groupId) {
        if (typeof groupId === "string") {
            if (this.groups.get("id") == groupId) {
                return this.groups;
            }
            else {
                throw new Error("group not found")
            }
        }
        else {
            throw new Error("validation problem");
        }
    }
    readAll(arg) {
        if (arg) {
            throw new Error("pass parameters");
        }
        else {
            return Array.from(this.groups);
        }
    }
}