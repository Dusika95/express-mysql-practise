import {
	ColumnType,
	Generated,
	Insertable,
	Selectable,
	Updateable,
} from "kysely";

export interface Database {
	names: NameTable;
}

export interface NameTable {
	id: Generated<number>;
	name: string;
	date: ColumnType<Date>;
}

export type Names = Selectable<NameTable>;
