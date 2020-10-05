# learn-graphql-apollo-server
Learning project using apollo-server, json-server 

1) npm install
2) npm run json:server
3) npm run dev (in another console)

## To test browse to http://localhost:4000/graphql and test the following: 

### Search for all customer
{
  customers {
    id, name, age, email
  }
}

### Search for a customer
{
  customer(id:1) { 
    name
  }
}

### Add a customer
mutation {
  addCustomer(name:"Martim", email:"mota@mota", age:21) {
    name,
    email,
    age
  }
}

### Edit a customer
mutation {
  editCustomer(id:"1", name:"Martim", email:"mota@mota", age:21) {
    name,
    email,
    age
  }
}
