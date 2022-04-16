
export type ID = string|number;

export type IMAGE = { id:ID,url:string };

export type PICTURE = { id:ID,slug:string,title:string , image:IMAGE , thumbnail?:IMAGE };