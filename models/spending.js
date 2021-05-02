import Model from "objection";
import user from "./User";

export class spending extends Model {
    static get tableName() {
        return 'spendings';
    }
    
    static relationMappings = {
        user: {
          relation: Model.BelongsToOneRelation,
          modelClass: user,
          join: {
            from: 'spendings.user_id'
            to: 'users.id',
          }
        },
    };
}