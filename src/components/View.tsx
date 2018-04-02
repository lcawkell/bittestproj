import * as React from 'react';

import Button from './Button';

export interface ViewProps {
}

export interface ViewState {
}

export default class View extends React.Component<ViewProps, ViewState> {
    constructor(props: ViewProps) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Button>Click me!</Button>
            </div>
        );
    }
}
