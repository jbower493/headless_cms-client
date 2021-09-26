/*---------- Imports ----------*/
import { waitFor, waitForElementToBeRemoved, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithBoth, mockLoader, debugFull } from 'utilities/testing/testUtils';
import { API } from 'utilities/api/auth';
import {
  createAdmin_success,
  adminExists_admin,
  createAdmin_errorShortPassword
} from 'utilities/testing/mockData/mockAuthData.json';
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
  //   userEvent.type(getByLabelText('Username'), 'Fredman');
  //   fireEvent.blur(getByLabelText('Password'));
  //   await waitFor(() => expect(getByText('Required')).toBeInTheDocument());
  // });



  // it('Should display loader in place of submit button while admin setup request loads on form submit', async () => {
  //   API.auth.POST.admin.mockResolvedValue(createAdmin_success);
  //   API.auth.GET.admin.mockResolvedValue(adminExists_admin);

  //   const { getByText, getByLabelText } = renderWithBoth(<AdminSetup />, '/admin-setup');

  //   expect(getByText('Continue').classList).toContain('DisabledButton');
  //   userEvent.type(getByLabelText('Username'), 'Fredman');
  //   userEvent.type(getByLabelText('Password'), 'password1234');
  //   await waitFor(() => expect(getByText('Continue').classList).toContain('SolidButton'));
  //   userEvent.click(getByText('Continue'));
  //   await waitFor(() => expect(getByText('Loading')).toBeInTheDocument());
  // });

  // practice one to figure out formik
  it('Should display loader in place of submit button while admin setup request loads on form submit', async () => {
    
  });




  // it('Should still show admin exist form with previous values and display error notification if admin setup request fails', async () => {
  //   // Figure out how to test notification
  // });

  // it('Should show success notification and login form if admin setup request succeeds', async () => {
    
  // });

});