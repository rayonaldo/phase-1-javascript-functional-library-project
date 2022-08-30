const myEach = function (collection, cb) {
    if (Array.isArray(collection)) {
      for (const elem of collection) {
        cb(elem);
      }
    } else {
      for (const key in collection) {
        if (Object.hasOwnProperty.call(collection, key)) {
          const element = collection[key];
          cb(element);
        }
      }
    }
    return collection;
  };

  function myMap(collection, cb) {
    if (Array.isArray(collection)) {
      return collection.map(cb);
    } else {
      return Object.values(collection).map(cb);
    }
  }

  const myReduce = function (collection, cb, acc) {
    let newArr;
    if (Array.isArray(collection)) {
      if (acc !== undefined) {
        return collection.reduce(cb, acc);
      } else {
        newArr = collection.slice(1);
        return newArr.reduce(cb, collection[0]);
      }
    } else {
      if (acc !== undefined) {
        return Object.values(collection).reduce(cb, acc);
      } else {
        newArr = Object.values(collection).slice(1);
        return newArr.reduce(cb, Object.values(collection)[0]);
      }
    }
  };

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      return collection.find(predicate);
    } else {
      return Object.values(collection).find(predicate);
    }
  }

  function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      return collection.filter(predicate);
    } else {
      return Object.values(collection).filter(predicate);
    }
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.values(collection).length;
    }
  }

  function myFirst(arr, int) {
    let newArr = [];
    if (int !== undefined) {
      return arr.slice(0, int);
    } else {
      return arr[0];
    }
  }

  function myLast(arr, int) {
    if (int !== undefined) {
      return arr.slice(-int);
    } else {
      return arr[arr.length - 1];
    }
  }

  function myKeys(object) {
    return Object.keys(object);
  }
  function myValues(obj) {
    return Object.values(obj);
  } 