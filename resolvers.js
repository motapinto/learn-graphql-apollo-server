const resolvers = {
  Query: {
    customer: async (_, { id }) => {
      const data = await axios.get("http://localhost:3000/customers/" + id);
      return data;
    },
    customers: async () => {
      const data = await axios.get("http://localhost:3000/customers/");
      return data;
    },
  },

  Mutation: {
    addCustomer: (_, { name, email, age }) => {
      const response = axios.post("http://localhost:3000/customers", {
        name,
        email,
        age,
      });
      return response.data;
    },

    editCustomer: (_, { id, name, email, age }) => {
      const response = axios.patch("http://localhost:3000/customers" + id, {
        name,
        email,
        age,
      });
      return response.data;
    },
  },
};

module.exports = resolvers;
