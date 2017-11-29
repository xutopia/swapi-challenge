import renderer from 'react-test-renderer'
import { Landing } from '../../client/containers/Landing.jsx';

describe('Landing --- Snapshot',() => {
  it('+++capturing Snapshot of Landing', () => {
    const renderedValue =  renderer.create(<Landing />).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});
