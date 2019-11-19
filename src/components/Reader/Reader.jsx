import React, { Component } from 'react';
import T from 'prop-types';

import styles from './Reader.module.css';

import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

class Reader extends Component {

    static propTypes = {
        items: T.arrayOf(T.exact).isRequired,
    };

    state = {
        pageIdx: 0
    };

    handleChange = ({ target: { innerText } }) => {
        this.setState(state => (
            { pageIdx: innerText === 'Вперед' ? state.pageIdx + 1 : state.pageIdx - 1 }
        ));
    };

    render() {
        const { items } = this.props;
        const { pageIdx } = this.state;
        return (
            < div className={styles.reader} >
                <Controls onChange={this.handleChange} currentIdx={pageIdx} lastIdx={items.length - 1} />
                <Counter index={pageIdx + 1} countAll={items.length} />
                <Publication article={items[pageIdx]} />
            </div >
        )
    }
}

export default Reader;
