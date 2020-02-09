import { selectGlobal, selectModals } from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('selectModals', () => {
  const modalsSelector = selectModals();
  it('should select list of modals', () => {
    const modals = [
      { type: 'SOME_MODAL', props: { }}
    ];

    const mockedState = {
      global: {
        modals,
      },
    };
    expect(modalsSelector(mockedState)).toEqual(modals);
  });
});
