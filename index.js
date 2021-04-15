

exports.handler = async (event) => {
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Test gestion de projet'),
    };
    return response;
};
