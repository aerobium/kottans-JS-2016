(function () {
    "use strict";

    if (typeof Object.deepAssign == "function") return;

    var isEnumerable = {}.propertyIsEnumerable;

    function recursiveReflect(to, from) {

        Reflect.ownKeys(from).forEach(function (key) {

            if (from[key] !== null && typeof from[key] === 'object' && from[key].constructor !== Array) {

                if (from[key] instanceof Date || from[key] instanceof RegExp || from[key] instanceof Map || from[key] instanceof Set) {
                    to[key] = new from[key].constructor(from[key]);
                }else{
                    recursiveReflect(to, from[key]);
                }
            } else {
                if (isEnumerable.call(from, key)) {
                    to[key] = from[key]
                }
            }
        })
    }


    Object.defineProperty(Object, "deepAssign",
        {
            value: function deepAssign(target, sources) {
                if (target == null) throw new TypeError;

                var to = Object(target);

                //Go throw arguments starting from the second (from the source)
                for (var index = 1; index < arguments.length;) {
                    var from = arguments[index++];

                    if (from !== Object(from)) {
                        continue;
                    }

                    recursiveReflect(to, from);
                }

                return to
            },
            writable: true,
            configurable: true
        })
})();
