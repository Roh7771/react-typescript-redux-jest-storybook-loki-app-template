import { DataInitialStateType } from '../../types/redux/data/types';
import { DataActionCreators, DataActionTypes, dataReducer } from './data';

const mockDataInitialState: DataInitialStateType = {
  title: 'Some title!',
};

describe('Reducer', () => {
  test('should set title', () => {
    expect(
      dataReducer(mockDataInitialState, {
        type: DataActionTypes.SET_TITLE,
        payload: 'New title!',
      }),
    ).toEqual({
      ...mockDataInitialState,
      title: 'New title!',
    });
  });

  test('should reset title', () => {
    expect(
      dataReducer(mockDataInitialState, {
        type: DataActionTypes.RESET_TITLE,
      }),
    ).toEqual({
      ...mockDataInitialState,
      title: 'Hello World!',
    });
  });
});

describe('Action creator', () => {
  test('for setting new title returns correct action', () => {
    expect(DataActionCreators.setTitle('New Title!')).toEqual({
      type: DataActionTypes.SET_TITLE,
      payload: 'New Title!',
    });
  });

  test('for resetting title returns correct action', () => {
    expect(DataActionCreators.resetTitle()).toEqual({
      type: DataActionTypes.RESET_TITLE,
    });
  });
});

// Пример тестирования ассинхронной операции
// describe("Operation", () => {
//   test("loadTitle should make a correct API call to /titles", async () => {
//     const api = axios.create({
//       baseURL: "https://reagent-api.herokuapp.com/api/v1",
//       timeout: 30000,
//       withCredentials: true,
//     });

//     const apiMock = new MockAdapter(api);
//     apiMock.onGet("/titles").reply(200, { title: "Title from mockAPI" });
//     const mockDispatch = jest.fn();

//     await DataOperation.loadTitle(mockDispatch, api);

//     expect(mockDispatch).toHaveBeenCalledTimes(1);
//     expect(mockDispatch).toHaveBeenNthCalledWith(1, {
//       type: DataActionTypes.SET_TITLE,
//       payload: "Title from mockAPI",
//     });
//   });
// });
