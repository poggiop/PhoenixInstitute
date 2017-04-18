"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const CookieParser = require("cookie-parser");
const BodyParser = require("body-parser");
const Http = require("http");
const K = require("kwyjibo");
const lagash_dbaccess_1 = require("lagash-dbaccess");
const Passport = require("passport");
const PassportLocal = require("passport-local");
const cookieSession = require("cookie-session");
require("reflect-metadata");
class App {
    static get authorize() {
        return App.securityProvider.getAuthorizeMiddleware();
    }
    static get authenticate() {
        return App.securityProvider.getAuthenticateMiddleware();
    }
    static init() {
        if (process.env.NODE_ENV === "development") {
            App.isDevelopment = true;
        }
        App.express = Express();
        App.express.set("view engine", "hbs");
        let hbs = require("hbs");
        hbs.registerPartials(__dirname + "/views/partials");
        App.express.set("trust proxy", true);
        App.express.use(BodyParser.json());
        App.express.use(BodyParser.urlencoded({ extended: false }));
        App.express.use(CookieParser());
        App.express.use(cookieSession({
            secret: "secretSessionKey",
            name: "session"
        }));
        App.express.use(Passport.initialize());
        App.express.use(Passport.session());
        Passport.use(new PassportLocal.Strategy((user, pass, done) => {
            // ignore password, accept user
            done(null, { username: user });
        }));
        Passport.serializeUser((user, done) => {
            done(null, user);
        });
        Passport.deserializeUser((user, done) => {
            done(null, user);
        });
        App.securityProvider = {
            getAuthorizeMiddleware() {
                return (req, res, next) => {
                    if (!req.isAuthenticated()) {
                        let message = `The request to ${req.path} requires an authenticated user`;
                        res.status(401).send(message);
                    }
                    else {
                        next();
                    }
                };
            },
            getAuthenticateMiddleware() {
                return Passport.authenticate("local");
            }
        };
        App.verifyEnvData([
            "SQLSERVER",
            "SQLUSER",
            "SQLPASSWORD",
            "SQLDB"
        ]);
    }
    static start() {
        // Create HTTP server.
        App.server = Http.createServer(App.express);
        App.express.use(Express.static("public"));
        // Init all Kwyjibo controllers, tests, loggers and error handlers
        K.initialize(App.express);
        // Listen on provided port, on all network interfaces.
        App.express.set("port", App.port);
        App.server.listen(App.port);
        App.server.on("error", App.onError);
        App.server.on("listening", App.onListening);
    }
    static onError(error) {
        if (error.syscall !== "listen") {
            throw error;
        }
        let bind = typeof App.port === "string" ? ("Pipe " + App.port) : ("Port " + App.port);
        // handle specific listen errors with friendly messages
        switch (error.code) {
            case "EACCES":
                console.error(bind + " requires elevated privileges");
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error(bind + " is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
    static onListening() {
        let addr = App.server.address();
        let bind = typeof addr === "string" ?
            "pipe " + addr :
            "port " + addr.port;
        if (App.isDevelopment) {
            console.log("Listening on " + bind);
        }
    }
    static verifyEnvData(properties) {
        for (let prop of properties) {
            if (!process.env[prop]) {
                throw new Error(`Missing ENV var: ${prop}`);
            }
        }
    }
}
App.port = normalizePort(process.env.port || "3000");
App.isDevelopment = false;
exports.default = App;
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
lagash_dbaccess_1.RepositoryBase.connect(new lagash_dbaccess_1.SqlServerConnection(process.env.SQLUSER, process.env.SQLPASSWORD, process.env.SQLSERVER, process.env.SQLDB));
App.init();
App.start();
//# sourceMappingURL=app.js.map