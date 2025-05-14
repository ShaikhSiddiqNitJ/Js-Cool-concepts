if (!Object.customAssign) {
    Object.customAssign = function (target, ...sources) {
        if (target === null || target === undefined) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        const to = Object(target);

        sources.forEach(source => {
            if (source !== null && source !== undefined) {
                for (const key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        to[key] = source[key];
                    }
                }
            }
        });

        return to;
    };
}

// ✅ Test Case 1: Basic merge
const target1 = { a: 1 };
const source1 = { b: 2 };
console.log(Object.customAssign(target1, source1)); 
// Expected: { a: 1, b: 2 }

// ✅ Test Case 2: Multiple sources
const source2 = { c: 3 };
console.log(Object.customAssign({}, source1, source2)); 
// Expected: { b: 2, c: 3 }

// ✅ Test Case 3: Null and undefined sources
console.log(Object.customAssign({ a: 1 }, null, undefined, { b: 2 })); 
// Expected: { a: 1, b: 2 }

// ✅ Test Case 4: Overriding properties
console.log(Object.customAssign({ a: 1 }, { a: 2, b: 3 })); 
// Expected: { a: 2, b: 3 }

// ✅ Test Case 5: Throws error on null target
try {
    Object.customAssign(null, { a: 1 });
} catch (e) {
    console.log(e.message); 
    // Expected: 'Cannot convert undefined or null to object'
}
