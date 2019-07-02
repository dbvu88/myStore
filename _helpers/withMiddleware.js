import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import express from 'express';

export default (app) => {


    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

}