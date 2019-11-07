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
        idx: 0,
        statusPrev: 'disable',
        statusNext: ''
    };

    handlePrev = () => {
        if (this.state.idx > 1) {
            this.setState(state => (
                { idx: state.idx - 1 }
            ));
            this.setState(state => (
                { statusNext: '' }
            ))
        } else {
            this.setState(state => (
                { idx: state.idx - 1 }
            ));
            this.setState(state => (
                { statusPrev: 'disable' }
            ))
        }
    }


    handleNext = () => {
        if (this.state.idx < this.props.items.length - 2) {
            this.setState(state => (
                { idx: state.idx + 1 }
            ));
            this.setState(state => (
                { statusPrev: '' }
            ))
        } else {
            this.setState(state => (
                { idx: state.idx + 1 }
            ));
            this.setState(state => (
                { statusNext: 'disable' }
            ))

        }
    }

    render() {
        const { items } = this.props;
        const { idx } = this.state;
        return (
            < div className={styles.reader} >
                <Controls onPrev={this.handlePrev} onNext={this.handleNext} activePrev={this.state.statusPrev} activeNext={this.state.statusNext} />
                <Counter index={idx + 1} countAll={items.length} />
                <Publication article={items[idx]} />
            </div >
        )
    }
}

export default Reader;
