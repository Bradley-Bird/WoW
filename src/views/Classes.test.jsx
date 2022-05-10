import {
  screen,
  render,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  authResp,
  classDetail,
  classImage,
  classList,
  frostDetail,
} from '../Tests/fixtures';
const server = setupServer(
  rest.get(
    `https://us.api.blizzard.com/data/wow/playable-class/index`,
    (req, res, ctx) => res(ctx.json(classList))
  ),
  rest.post(`https://us.battle.net/oauth/token`, (req, res, ctx) =>
    res(ctx.json(authResp))
  ),
  rest.get(
    `https://us.api.blizzard.com/data/wow/playable-class/6`,
    (req, res, ctx) => res(ctx.json(classDetail))
  ),
  rest.get(
    `https://us.api.blizzard.com/data/wow/media/playable-class/6`,
    (req, res, ctx) => res(ctx.json(classImage))
  ),
  rest.get(
    `https://us.api.blizzard.com/data/wow/playable-specialization/251`,
    (req, res, ctx) => res(ctx.json(frostDetail))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Classes/>', () => {
  it('displays a list of class links, when clicked displays a list of spec links, when clicked displays spec details', async () => {
    render(
      <MemoryRouter initialEntries={[`/classes`]}>
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);
    const classList = await screen.findByRole('list');
    expect(classList.children.length).toEqual(12);
    const Dk = await screen.findByText(/death knight/i);
    userEvent.click(Dk);

    const loadState = await screen.findByText(/loading/i);
    await waitForElementToBeRemoved(loadState);
    expect(Dk).toBe.selected;

    screen.getByRole('img', {
      name: /an image of a death knight symbol/i,
    });

    const link = screen.getByRole('link', {
      name: /frost/i,
    });
    within(link).getByRole('listitem');

    const frost = await screen.findByText(/frost/i);
    userEvent.click(frost);
    const SpecLoad = await screen.findByText(/loading/i);
    await waitForElementToBeRemoved(SpecLoad);
    await screen.findByRole('heading', { name: /role: damage/i });
    screen.debug();
  });
});
