export class TeachersModel {
    add(teacher) {
        if (teacher && typeof teacher === 'object') {
            if (this.checkObj(teacher.name) && this.checkStr(teacher.name.first) && this.checkStr(teacher.name.last)
                && this.checkStr(teacher.image) && this.checkStr(teacher.dateOfBirth)
                && teacher.dateOfBirth.indexOf('.') === 2 && teacher.dateOfBirth.lastIndexOf('.') === 5
                && teacher.dateOfBirth.substring(0, 2) <= 31 && teacher.dateOfBirth.substring(3, 5) <= 12
                && this.checkArr(teacher.emails) && this.checkArr(teacher.phones) && this.checkStr(teacher.sex)
                && (teacher.sex.indexOf("male") === 0 || teacher.sex.indexOf("female") === 0)
                && this.checkArr(teacher.subjects)) {
                    


                    
                    if (teacher.description && typeof teacher.description === "string") {
                        this.description = teacher.description;
                    }
            } else {
                throw new Error('invalid parameter!');
            }
        } else {
            throw new Error('type must be object!');
        };


    }
    checkStr(param) {
        return (param && typeof param === 'string') ? true : false;
    }
    checkObj(param) {
        return (param && typeof param === 'object') ? true : false;
    }
    checkArr(param) {
        if (param && Array.isArray(param)) {
            let check = false;
            for (let i = 0; i < param.length; i++) {
                if (!this.checkStr(Object.values(param[i])[0]) || typeof Object.values(param[i])[1] !== "boolean") {
                    check = false;
                    break;
                } else {
                    check = true;
                }
            }
            return check;
        } else {
            return false;
        }
    }
}