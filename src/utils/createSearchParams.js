const createSearchParams = (query) => {
    const params = {};
    //const [operator, age] = query.age ? query.age.split('-') : [null, null];
    if (query.name) params['name'] = query.name;
    if (query.mail) params['mail'] = query.mail;
    if (query.password) params['password'] = query.password;
    if (query._id) params['_id'] = query._id;
    if (query.age) params['age'] = {
        [`$${operator}`]: age
    };
    //console.log(params);
    return params;
};

module.exports = createSearchParams;