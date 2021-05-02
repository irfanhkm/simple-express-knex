import Model from "objection";
import spending from "./spending";
import wallets from "./wallets";

export class user extends Model {
    static get tableName() {
        return 'users';
    }

    static relationMappings = {
        spendings: {
          relation: Model.HasManyRelation,
          modelClass: spending,
          join: {
            from: 'users.id',
            to: 'spendings.user_id'
          }
        },
        wallets: {
            relation: Model.HasManyRelation,
            modelClass: wallets,
            join: {
              from: 'users.id',
              to: 'wallets.user_id'
            }
        }
    };
}