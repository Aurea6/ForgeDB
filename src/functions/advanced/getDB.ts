import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { DataBase } from "../../util"

export default new NativeFunction({
    name: "$getDB",
    version: "1.0.0",
    description: "Returns all the identifiers stored in the DB",
    output: ArgType.Json,
    unwrap: false,
    async execute(_ctx) {
        return this.successJSON(await DataBase.getAll())
    },
})