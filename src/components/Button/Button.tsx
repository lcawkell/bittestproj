import * as React from 'react';

interface ButtonProps {
    onClick?: () => void,
    styles?: IButtonStyles,
    children?: any
}

interface ButtonState {
}

export interface IButtonStyles {
    root?: {

    }
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);

        this.state = {
    }
  }

    onClick = () => {
        this.props.onClick();
    }

    render() {

        let defaultStyles:IButtonStyles = {
            root: {
                padding: '10px'
            }
        }

        let styles = Object.assign({}, defaultStyles, this.props.styles);

        return (
            <button type="button" className="btn btn-default" style={{...defaultStyles.root}} onClick={this.onClick}>
               {this.props.children} 
            </button>
        );
    }
}
