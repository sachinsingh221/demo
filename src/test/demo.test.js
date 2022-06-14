import renderer from 'react-test-renderer';
import Link from '../components/component/Link';
import Demo from '../components/view/demo';
it('changes the class when clicked', () => {
  const component = renderer.create(
    <Demo></Demo>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.handleModeChange();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});