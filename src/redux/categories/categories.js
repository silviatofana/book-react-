const checkStatus = 'react-bookstore/category/checkStatus';
const initialCategoryState = [];

const category = () => ({
  type: checkStatus,
});

const categoryRed = (state = initialCategoryState, action) => {
  switch (action.type) {
    case checkStatus:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};
export { category };
export default categoryRed;
