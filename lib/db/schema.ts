import { boolean } from "drizzle-orm/gel-core";
import { pgTable, serial, text, date, timestamp} from "drizzle-orm/pg-core"


// Name (First, Middle, Last)
// Date of Birth
// Status (Maybe make it enum?)
// Address

export type Patient = typeof patients.$inferSelect;
export type NewPatient = typeof patients.$inferInsert;

export const patients = pgTable("patients",{
    id : serial('id').primaryKey(),
    firstName : text('first_name').notNull(),
    middleName : text('middle_name'), // don't worry about this being Null.
    lastName : text('last_name').notNull(),
    dateOfBirth : date("date_of_birth").notNull(),
    status : text("status").notNull().default("Inquiry"),
    address : text("address").notNull(),
    createdAt : timestamp("created_at").defaultNow().notNull(),
    extraColumns : json("extra_columns").$type<[string, string]>().default([]).notNull()
})
// < id of Column, data of column>

// Example:
// 1 , 2,  3, 4
// height, weight, notes, emergency_contact
// float, float, text, text

// Tracks column id, -> column names and column types.
export const providerColumns = pgTable("provider_columns",{
    id : serial('id').primaryKey(),
    columnName : text('column_names').notNull(),
    types : text("type").notNull().default("INT"),
    deleteFlag : boolean("deleteFlag").default(false)
})



// Table for extra columns
// id : <(weight,1),(height,2)> 

// Table for tracking what extra column exists right now
// account number provider: column settings <(WEIGHT, INT), (HEIGHT, INT)>

//