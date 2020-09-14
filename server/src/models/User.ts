export default {
    all(){
        return users;
    },
    find(email: String, password: String) {
        const user = users.filter((user)=> user.email == email && user.password == password);
        return user.shift();
    }
};

// test
const users = [
    {
        id: 1,
        name: 'Test One',
        email: 'testone@test.com.br',
        password: 'T12345678'
    },
    {
        id: 2,
        name: 'Test Two',
        email: 'testtwo@test.com.br',
        password: 'T12345678'
    },
];