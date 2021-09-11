/*---------- Imports ----------*/
import { waitFor, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';
import { renderWithBoth, mockLoader, debugFull } from 'utilities/testing/testUtils';
import { API } from 'utilities/api/auth';
import AdminSetup from 'containers/adminSetup';

/*---------- Mocks ----------*/
jest.mock('components/Loaders/RequestLoader', () => mockLoader);
jest.mock('utilities/api/auth');

/*---------- Cleanup ----------*/
afterEach(cleanup);

/*----------Tests ----------*/
describe('ADMIN SETUP', () => {

  // it('Should display admin setup form on page load.', () => {
  //   const { getByText } = renderWithBoth(<AdminSetup />, '/admin-setup');

  //   expect(getByText('Admin Setup')).toBeInTheDocument();
  // });

  // it('Submit button should be disabled unless all fields are filled', async () => {
  //   const { getByText, getByLabelText } = renderWithBoth(<AdminSetup />, '/admin-setup');

  //   expect(getByText('Continue').classList).toContain('DisabledButton');
  //   await waitFor(() => fireEvent.change(getByLabelText('Username'), { target: { value: 'Fredman' } }));
  //   expect(getByText('Continue').classList).toContain('DisabledButton');
  // });

  it('Should display loader in place of submit button while admin setup request loads on form submit', async () => {
    //////////////// Mock out api endpoints and make mock data files

    const { getByText, getByLabelText, queryByText } = renderWithBoth(<AdminSetup />, '/admin-setup');

    await waitFor(() => fireEvent.change(getByLabelText('Username'), { target: { value: 'Fred' } }));
    await waitFor(() => fireEvent.change(getByLabelText('Password'), { target: { value: 'somepw' } }));
    expect(getByText('Continue').classList).toContain('SolidButton');
    await waitFor(() => fireEvent.click(getByText('Continue')));
    expect(queryByText('Continue')).not.toBeInTheDocument();
    expect(getByText('Loading')).toBeInTheDocument();
  });

  // it('Should still show admin exist form with previous values and display error notification if admin setup request fails', async () => {
  //   // Figure out how to test notification
  // });

  // it('Should show success notification and login form if admin setup request succeeds', async () => {
    
  // });

});