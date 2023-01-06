import { createSelector } from "reselect";
import { categoriesReducer } from "./category.reducer";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [categoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);