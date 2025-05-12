const obj1 = {
    a: 1,
    b: 2,
    c: {
      d: 5
    },
    e: new Date(),
    f: undefined
  };
  
  function deepcopy(obj) {
    // null ko handle karo, warna typeof null === 'object' hota hai
    if (obj === null || typeof obj !== 'object') return obj;
  
    // agar array hai toh [] warna {}
    let deepcopyobj = Array.isArray(obj) ? [] : {};
  
    // sabhi keys uthao
    let allkeys = Object.keys(obj);
  
    // traverse karo har key ko
    for (let i = 0; i < allkeys.length; i++) {
      let key = allkeys[i];
      let val = obj[key];
  
      // agar value Date instance hai
      if (val instanceof Date) {
        deepcopyobj[key] = new Date(val.getTime());
      }
      // agar value object ya array hai
      else if (val !== null && typeof val === 'object') {
        deepcopyobj[key] = deepcopy(val);
      }
      // primitive ya undefined case
      else {
        deepcopyobj[key] = val;
      }
    }
  
    return deepcopyobj;
  }
  
  console.log("11", deepcopy(obj1));
  