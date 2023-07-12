const {faker} = require('@faker-js/faker')
const express = require('express')
const app = express()
const port = 8000

//make sure these lines are above any app.get or app.post code blocks
//these are used for POST requests
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newFakeUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        _id: faker.number.int(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    };
    return newFakeUser;
}

const createCompany = () => {
    const newFakeCompany = {
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        },
        _id: faker.number.int()
    }
    return newFakeCompany;
}

// const FakeUser1 = createUser();
// console.log(FakeUser1);

// const FakeCompany1 = createCompany();
// console.log(FakeCompany1);

app.get('/api/users/new', (req, res)=>{
    newUser = createUser();
    console.log(newUser);
    res.json(newUser)
})

app.get('/api/companies/new', (req, res)=>{
    newCompany = createCompany();
    console.log(newCompany);
    res.json(newCompany)
})

app.get('/api/user/company', (req, res)=>{
    const newUser = createUser();
    const newCompany = createCompany();
    userCompany = {
        ...newUser,
        ...newCompany
    }
    console.log(userCompany);
    // res.json(userCompany)
    res.json({
        "user": newUser,
        "company": newCompany
    })
})


// app.post('/api/users/new', (req,res)=>{
//     newUser = createUser()
//     res.json(req.body);
// })



app.listen(port,() => console.log(`>>RUNNING SERVER`));