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
            this.groups.set(id, { roomNum, pupils: new Set() });
            return id;
        }
        else {
            throw new Error("room must have a number!");
        }
    }

    addPupil(groupId, pupil) {
        if (this.groups.has(groupId)) {
            this.groups.get(groupId).pupils.add(pupil);
        } else {
            throw new Error("there is no such group");
        }
    }

    removePupil(groupId, pupilId) {
        if (this.groups.has(groupId)) {
            for (let item of this.groups.get(groupId).pupils) {
                if (item.id === pupilId) {
                    return this.groups.get(groupId).pupils.delete(item);
                }
            }
        } else {
            throw new Error("there is no such group");
        }
    }

    update(groupId, obj) {
        if (typeof groupId === "string" && typeof obj === "object") {
            if (this.groups.has(groupId)) {
                this.groups.get(groupId).roomNum = obj.room;
            } else {
                throw new Error("We havn't such group!");
            }
        } else {
            throw new Error("validation problem");
        }
    }

    read(groupId) {
        if (typeof groupId === "string") {
            if (this.groups.has(groupId)) {
                let groupInfo = {
                    'id': groupId,
                    'room': this.groups.get(groupId).roomNum
                };
                return groupInfo;
            }
            else {
                throw new Error("group not found")
            }
        }
        else {
            throw new Error("validation problem");
        }
    }

    readAll(parameter) {
        if (parameter) {
            throw new Error("please don't pass the parameters");
        } else {
            return Array.from(this.groups);
        }
    }
}