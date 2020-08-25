import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header="Testing testing test" cards={[{ id: 2, name: 'hi' }, { id: 3, name: 'hi' }, { id: 4, name: 'hi' }]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        //jest.mock('TextInput', () => 'TextInput');
        const tree = renderer
            .create(<List header="Test" cards={[]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List header="Hi" cards={[{ id: 2, title: 'hi', content: 'hhh' }, { id: 3, title: 'hi', content: 'hhh' }, { id: 4, title: 'hi', content: 'hhh'}]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});



