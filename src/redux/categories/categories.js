const CHECK_STATUS = 'react-bookstore/category/CHECK_STATUS';
const initialCategoryState = [];

const category = () => ({
  type: CHECK_STATUS,
});

const categoryRed = (state = initialCategoryState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};
export { category };
export default categoryRed;

