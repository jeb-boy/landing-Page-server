function createResourceService(data, resourceName, idPrefix) {
  function getAll() {
    return data;
  }

  function getById(id) {
    return data.find((item) => item.id === id);
  }

  function create(item) {
    const number = data.length + 1;
    const newItem = {
      id: `${idPrefix}-${String(number).padStart(3, "0")}`,
      ...item
    };

    data.push(newItem);
    return newItem;
  }

  function update(id, item) {
    const index = data.findIndex((entry) => entry.id === id);

    if (index === -1) {
      return null;
    }

    data[index] = {
      id,
      ...item
    };

    return data[index];
  }

  function remove(id) {
    const index = data.findIndex((entry) => entry.id === id);

    if (index === -1) {
      return false;
    }

    data.splice(index, 1);
    return true;
  }

  return {
    resourceName,
    getAll,
    getById,
    create,
    update,
    remove
  };
}

module.exports = createResourceService;