function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const ususarios = new Map();

ususarios.set('Jesse','Admin');
ususarios.set('Cristiane','Admin');
ususarios.set('Miguel','User');
ususarios.set('Junior','Admin');

console.log(getAdmins(ususarios));
