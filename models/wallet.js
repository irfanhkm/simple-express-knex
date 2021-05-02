import Model from "objection";
import user from "./user";

export class wallets extends Model {
    static get tableName() {
        return 'wallets';
    }
    
    static relationMappings = {
        user: {
          relation: Model.BelongsToOneRelation,
          modelClass: user,
          join: {
            from: 'wallets.user_id'
            to: 'users.id',
          }
        },
    };
}