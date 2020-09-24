import { FullStateType } from '../../types/general-types';

export default (state: FullStateType) => state.data.title;

// Пример использования селектора:
// export const getSpecificTitle = createSelector(
//   getAllTitle,
//   getIndex,
//   (titleList, index) => titleList[index],
// );
