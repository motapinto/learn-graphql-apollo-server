const axios = require("axios");

const resolvers = {
  Query: {
    customer: async (_, { id }) => {
      const res = await axios.get("http://localhost:3000/customers/" + id);
      return res.data;
    },
    customers: async () => {
      const res = await axios.get("http://localhost:3000/customers/");
      return res.data;
    },
  },

  Mutation: {
    addCustomer: async (_, { name, email, age }) => {
      const res = await axios.post("http://localhost:3000/customers", {
        name,
        email,
        age,
      });
      return res.data;
    },

    editCustomer: async (_, { id, name, email, age }) => {
      const res = await axios.patch("http://localhost:3000/customers/" + id, {
        name,
        email,
        age,
      });
      return res.data;
    },

    deleteCustomer: async (_, { id }) => {
      const res = await axios.delete("http://localhost:3000/customers/" + id);
      console.log(res.data);
      return res.data;
    },
  },
};

module.exports = resolvers;
