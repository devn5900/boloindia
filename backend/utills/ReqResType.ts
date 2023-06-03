const { Request, Response,NextFunction } = require("express");

export type ReqType = typeof Request;
export type ResType = typeof Response;
export type Next = typeof NextFunction;
