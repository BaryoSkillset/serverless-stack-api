import dynamodb from './libs/dynamodb-lib';
import handler from './libs/handler-lib';

export const main = handler( async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": "123",
        },
    };

    const result = await dynamodb.query(params);
    return result.Items;
});