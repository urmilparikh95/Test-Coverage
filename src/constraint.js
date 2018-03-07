// Core/NPM Modules
const esprima = require("esprima");
const faker = require("faker");
const fs = require('fs');
const Random = require('random-js');
const _ = require('lodash');
const randexp = require('randexp');



// Set options
faker.locale = "en";
const options = {
    tokens: true,
    tolerant: true,
    loc: true,
    range: true
};



// Create random generator engine
const engine = Random.engines.mt19937().autoSeed();


/**
 * Constraint class. Represents constraints on function call parameters.
 *
 * @property {String}                                                          ident      Identity of the parameter mapped to the constraint.
 * @property {String}                                                          expression Full expression string for a constraint.
 * @property {String}                                                          operator   Operator used in constraint.
 * @property {String|Number}                                                   value      Main constraint value.
 * @property {String|Number}                                                   altvalue   Constraint alternative value.
 * @property {String}                                                          funcName   Name of the function being constrained.
 * @property {'fileWithContent'|'fileExists'|'integer'|'string'|'phoneNumber'} kind       Type of the constraint.
 */
class Constraint {
    constructor(properties) {
        this.ident = properties.ident;
        this.expression = properties.expression;
        this.operator = properties.operator;
        this.value = properties.value;
        this.altvalue = properties.altvalue;
        this.funcName = properties.funcName;
        this.kind = properties.kind;
    }
}


/**
 * Generate function parameter constraints for an input file
 * and save them to the global functionConstraints object.
 *
 * @param   {String} filePath Path of the file to generate tests for.
 * @returns {Object}          Function constraints object.
 */
function constraints(filePath) {

    // Initialize function constraints directory
    let functionConstraints = {};

    // Read input file and parse it with esprima.
    let buf = fs.readFileSync(filePath, "utf8");
    let result = esprima.parse(buf, options);

    // Start traversing the root node
    traverse(result, function (node) {

        // If some node is a function declaration, parse it for potential constraints.
        if (node.type === 'FunctionDeclaration') {

            // Get function name and arguments
            let funcName = functionName(node);
            let params = node.params.map(function (p) {
                return p.name
            });

            // Initialize function constraints
            functionConstraints[funcName] = {
                constraints: _.zipObject(params, _.map(params, () => [])),
                params: params
            };

            // Traverse function node.
            traverse(node, function (child) {

                // Handle equivalence expression for both integers and string
                if (_.get(child, 'type') === 'BinaryExpression' && _.includes(['!=', '!==', '==', '==='], _.get(child, 'operator'))) {

                    // for normal equivalence
                    if (_.get(child, 'left.type') === 'Identifier') {

                        // Get identifier
                        let ident = child.left.name;

                        // Get expression from original source code:
                        let expression = buf.substring(child.range[0], child.range[1]);
                        let rightHand = buf.substring(child.right.range[0], child.right.range[1]);

                        // Test to see if right hand is a string
                        let match = rightHand.match(/^['"](.*)['"]$/);
                        //console.log("\nident = " +  ident + "\nexpression = " + expression + "\nrighthand = " + rightHand + "\nmatch = " + match);

                        // if variable is in params
                        if (_.includes(params, _.get(child, 'left.name'))) {

                            // Push a new constraints
                            let constraints = functionConstraints[funcName].constraints[ident];
                            constraints.push(new Constraint({
                                ident: child.left.name,
                                value: rightHand,
                                funcName: funcName,
                                kind: match ? "string" : "integer",
                                operator: child.operator,
                                expression: expression
                            }));
                            constraints.push(new Constraint({
                                ident: child.left.name,
                                value: match ? `'NEQ - ${match[1]}'` : NaN,
                                funcName: funcName,
                                kind: match ? "string" : "integer",
                                operator: child.operator,
                                expression: expression
                            }));
                        }
                    }

                    // For equivalence in indexof function
                    if (_.get(child, 'left.type') === 'CallExpression' && child.left.callee.property && child.left.callee.property.name === "indexOf") {

                        // Get identifier
                        let ident = child.left.callee.object.name;

                        // Get expression from original source code:
                        let expression = buf.substring(child.range[0], child.range[1]);
                        let rightHand = buf.substring(child.right.range[0], child.right.range[1]);

                        let value = child.left.arguments[0].raw;

                        if (_.includes(params, ident)) {
                            // Push a new constraints
                            let constraints = functionConstraints[funcName].constraints[ident];
                            constraints.push(new Constraint({
                                ident: ident,
                                value: value,
                                funcName: funcName,
                                kind: "string",
                                operator: child.operator,
                                expression: expression
                            }));
                        }
                    }

                }

                // Handle greater expression
                if (_.get(child, 'type') === 'BinaryExpression' && _.includes(['>', '>='], _.get(child, 'operator'))) {
                    if (_.get(child, 'left.type') === 'Identifier') {

                        // Get identifier
                        let ident = child.left.name;

                        // Get expression from original source code:
                        let expression = buf.substring(child.range[0], child.range[1]);
                        let rightHand = buf.substring(child.right.range[0], child.right.range[1]);

                        if (_.includes(params, _.get(child, 'left.name'))) {

                            // Push a new constraints
                            let constraints = functionConstraints[funcName].constraints[ident];
                            constraints.push(new Constraint({
                                ident: child.left.name,
                                value: parseInt(rightHand) - 1,
                                funcName: funcName,
                                kind: "integer",
                                operator: child.operator,
                                expression: expression
                            }));
                            constraints.push(new Constraint({
                                ident: child.left.name,
                                value: parseInt(rightHand) + 1,
                                funcName: funcName,
                                kind: "integer",
                                operator: child.operator,
                                expression: expression
                            }));
                        }
                    }
                }

                // Handle lesser expression
                if (_.get(child, 'type') === 'BinaryExpression' && _.includes(['<', '<='], _.get(child, 'operator'))) {
                    if (_.get(child, 'left.type') === 'Identifier') {

                        // Get identifier
                        let ident = child.left.name;

                        // Get expression from original source code:
                        let expression = buf.substring(child.range[0], child.range[1]);
                        let rightHand = buf.substring(child.right.range[0], child.right.range[1]);

                        if (_.includes(params, _.get(child, 'left.name'))) {

                            // Push a new constraints
                            let constraints = functionConstraints[funcName].constraints[ident];
                            constraints.push(new Constraint({
                                ident: child.left.name,
                                value: parseInt(rightHand) - 1,
                                funcName: funcName,
                                kind: "integer",
                                operator: child.operator,
                                expression: expression
                            }));
                            constraints.push(new Constraint({
                                ident: child.left.name,
                                value: parseInt(rightHand) + 1,
                                funcName: funcName,
                                kind: "integer",
                                operator: child.operator,
                                expression: expression
                            }));
                        }
                    }
                }

                // Handle fs.readFileSync
                if (child.type === "CallExpression" && child.callee.property && child.callee.property.name === "readFileSync") {
                    // Get expression from original source code:
                    let expression = buf.substring(child.range[0], child.range[1]);

                    for (let p in params) {
                        if (child.arguments[0].name === params[p]) {

                            // Get identifier
                            let ident = params[p];

                            // Push a new constraint
                            // constraint for file with content
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value: "'pathContent/file1'",
                                funcName: funcName,
                                kind: "fileWithContent",
                                operator: child.operator,
                                expression: expression
                            }));
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value: "'pathContent/someDir'",
                                funcName: funcName,
                                kind: "fileWithContent",
                                operator: child.operator,
                                expression: expression
                            }));
                            // new constraint for file without content
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value: "'file'",
                                funcName: funcName,
                                kind: "fileExists",
                                operator: child.operator,
                                expression: expression
                            }));
                        }
                    }
                }

                // Handle fs.existsSync
                if (child.type === "CallExpression" && child.callee.property && child.callee.property.name === "existsSync") {
                    // Get expression from original source code:
                    let expression = buf.substring(child.range[0], child.range[1]);

                    for (let p in params) {
                        if (child.arguments[0].name === params[p]) {

                            // Get identifier
                            let ident = params[p];

                            // Push a new constraint
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value: "'emptyDir'",
                                funcName: funcName,
                                kind: "fileExists",
                                operator: child.operator,
                                expression: expression
                            }));
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value: "'nonEmptyDir'",
                                funcName: funcName,
                                kind: "fileExists",
                                operator: child.operator,
                                expression: expression
                            }));
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value: "'file'",
                                funcName: funcName,
                                kind: "fileExists",
                                operator: child.operator,
                                expression: expression
                            }));
                        }
                    }
                }

                // Handle fs.readdirSync
                if (child.type === "CallExpression" && child.callee.property && child.callee.property.name === "readdirSync") {
                    // Get expression from original source code:
                    let expression = buf.substring(child.range[0], child.range[1]);

                    for (let p in params) {
                        if (child.arguments[0].name === params[p]) {

                            // Get identifier
                            let ident = params[p];

                            // Push a new constraint
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value: "'emptyDir'",
                                funcName: funcName,
                                kind: "fileExists",
                                operator: child.operator,
                                expression: expression
                            }));
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value: "'nonEmptyDir'",
                                funcName: funcName,
                                kind: "fileExists",
                                operator: child.operator,
                                expression: expression
                            }));
                        }
                    }
                }

                // Handle phone-number length
                if (child.type === "ForStatement" && funcName === "format") {

                    let expression = buf.substring(child.range[0], child.range[1]);

                    traverse(child.init, function (subchild) {
                        if (_.get(subchild, 'type') === 'Identifier' && _.includes(params, subchild.name)) {
                            let ident = subchild.name;
                            let value = faker.phone.phoneNumberFormat();

                            //Push a new constraints
                            let constraints = functionConstraints[funcName].constraints[ident];
                            constraints.push(new Constraint({
                                ident: ident,
                                value: "'" + value + "'",
                                funcName: funcName,
                                kind: "phoneNumber",
                                operator: child.test.operator,
                                expression: expression
                            }));

                        }
                    });

                }

                // Handle options in format
                if (child.type === "IfStatement" && child.test.type === "LogicalExpression" && child.test.operator === "||" && funcName === "format") {           
                    let expression = buf.substring(child.range[0], child.range[1]);
                    let ident = child.test.left.argument.name;

                    // Constraint for null options
                    if (_.includes(params, ident)) {
                        // Push a new constraints
                        let constraints = functionConstraints[funcName].constraints[ident];
                        constraints.push(new Constraint({
                            ident: ident,
                            value: null,
                            funcName: funcName,
                            kind: "string",
                            operator: child.operator,
                            expression: expression
                        }));
                    }

                    let parameter = child.test.right.argument.property.name;
                    let format_options = {}

                    // Constraint for options without the parameter
                    if (_.includes(params, ident)) {
                        // Push a new constraints
                        let constraints = functionConstraints[funcName].constraints[ident];
                        constraints.push(new Constraint({
                            ident: ident,
                            value: JSON.stringify(format_options),
                            funcName: funcName,
                            kind: "string",
                            operator: child.operator,
                            expression: expression
                        }));
                    }

                    format_options[parameter] = true;

                    // Constraint for options with the parameter = true
                    if (_.includes(params, ident)) {
                        // Push a new constraints
                        let constraints = functionConstraints[funcName].constraints[ident];
                        constraints.push(new Constraint({
                            ident: ident,
                            value: JSON.stringify(format_options),
                            funcName: funcName,
                            kind: "string",
                            operator: child.operator,
                            expression: expression
                        }));
                    }

                    format_options[parameter] = false;

                    // Constraint for options with the parameter = false
                    if (_.includes(params, ident)) {
                        // Push a new constraints
                        let constraints = functionConstraints[funcName].constraints[ident];
                        constraints.push(new Constraint({
                            ident: ident,
                            value: JSON.stringify(format_options),
                            funcName: funcName,
                            kind: "string",
                            operator: child.operator,
                            expression: expression
                        }));
                    }


                }

            });

            // console.log( functionConstraints[funcName]);

        }
    });

    return functionConstraints;
}

/**
 * Traverse an object tree, calling the visitor at each
 * visited node.
 *
 * @param {Object}   object  Esprima node object.
 * @param {Function} visitor Visitor called at each node.
 */
function traverse(object, visitor) {

    // Call the visitor on the object
    visitor(object);

    // Traverse all children of object
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            let child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, visitor);
            }
        }
    }
}


/**
 * Return the name of a function node.
 */
function functionName(node) {
    return node.id ? node.id.name : '';
}


/**
 * Generates an integer value based on some constraint.
 *
 * @param   {Number}  constraintValue Constraint integer.
 * @param   {Boolean} greaterThan     Whether or not the concrete integer is greater than the constraint.
 * @returns {Number}                  Integer satisfying constraints.
 */
function createConcreteIntegerValue(constraintValue, greaterThan) {
    if (greaterThan) return Random.integer(constraintValue + 1, constraintValue + 10)(engine);
    else return Random.integer(constraintValue - 10, constraintValue - 1)(engine);
}


// Export
module.exports = constraints;