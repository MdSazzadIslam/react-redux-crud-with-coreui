import http from "../config";

class categoryService {
  createCategory = async (categoryId, categoryName, activeStatus) => {
    debugger;
    return await http
      .post("/api/category/create", {
        categoryId,
        categoryName,
        activeStatus,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  };

  editCategory = async (categoryId, categoryName, activeStatus) => {
    debugger;
    return await http
      .put("/api/category/edit", {
        categoryId,
        categoryName,
        activeStatus,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  };

  deleteCategory = async (id) => {
    debugger;
    return await http
      .delete(`/api/category/delete/${id}`)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  };

  getCategory = async () => {
    try {
      debugger;
      return await http.get("/api/category");
    } catch (err) {
      console.log(err);
    }
  };
  getCategoryById = async (id) => {
    try {
      return await http.get(`/api/Category/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
}

export default new categoryService();
