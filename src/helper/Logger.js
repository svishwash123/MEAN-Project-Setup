const debug = require('debug');

/**
 * All the function is use to take parameter 
 * @param msg - message which wanted to display
 * @param callingFrom - calling from which js file
 */
module.exports =function (scriptName){
    var module = {};

    module.debug = (msg) =>{
        let debugObject  = debug(scriptName+":debug");
        debugObject(msg);
    }

    module.info = (msg) =>{
        let infoObject  = debug(scriptName+":info");
        infoObject(msg);
    }

    module.warn = (msg) =>{
        let warnObject  = debug(scriptName+":warn");
        warnObject(msg);
    }

    module.error = (msg) =>{
        let errorObject  = debug(scriptName+":error");
        errorObject(msg);
    }

    return module;
};
