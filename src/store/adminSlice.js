import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modifiedProducts: [],
  deletedProducts: [],
  addedProducts: [],
  isDarkMode: false,
  storeSettings: {
    storeName: "THE EDIT",
    storeEmail: "admin@theedit.store",
    currency: "USD",
    isMaintenanceMode: false,
    lowStockThreshold: 5,
  },
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    createProduct(state, action) {
      state.addedProducts.push(action.payload);
    },
    deleteProduct(state, action) {
      state.deletedProducts.push(action.payload);
    },
    editProduct(state, action) {
      const index = state.modifiedProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.modifiedProducts[index] = action.payload;
      } else {
        state.modifiedProducts.push(action.payload);
      }
    },
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    updateSettings(state, action) {
      state.storeSettings = { ...state.storeSettings, ...action.payload };
    },
  },
});

export const {
  createProduct,
  deleteProduct,
  editProduct,
  toggleTheme,
  updateSettings,
} = adminSlice.actions;

export default adminSlice.reducer;

export const getAddedProducts = (state) => state.admin.addedProducts;
