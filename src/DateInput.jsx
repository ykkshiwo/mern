import React from 'react'

export default class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.editFormat(props.value), focused: false, valid: true };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.props.value) {
            this.setState({ value: this.editFormat(newProps.value) });
        }
    }

    onFocus() {
        console.log("get focus...");
        this.setState({ focused: true });
    }

    onBlur(e) {
        console.log("lose focus...");
        const value = this.unformat(this.state.value);
        console.log("is: ", this.state.value)
        console.log("value is: ", value)
        const valid = this.state.value === '' || value != null;
        console.log("valid date: ", valid);
        if (valid !== this.state.valid && this.props.onValidityChange) {
            this.props.onValidityChange(e, valid);
        }
        this.setState({ focused: false, valid });
        if (valid) this.props.onChange(e, value);
    }

    onChange(e) {
        console.log("changing...");
        if (e.target.value.match(/^[\d-]*$/)) {
            this.setState({ value: e.target.value });
        }
    }

    displayFormat(date) {
        console.log("this format of date is:", date);
        return (date != null) ? date.toString() : '';
    }

    editFormat(date) {
        return (date != null) ? date.toString().substr(0, 10) : '';
    }

    unformat(str) {
        const val = new Date(str);
        return isNaN(val.getTime()) ? null : val;
    }

    render() {
        const className = (!this.state.valid && !this.state.focused) ? 'invalid' : null;
        const value = (this.state.focused || !this.state.valid) ? this.state.value
            : this.displayFormat(this.props.value);
        const childProps = Object.assign({}, this.props);
        delete childProps.onValidityChange;
        return (
            <input
                type="text" size={20} name={this.props.name} className={className} value={value}
                placeholder={this.state.focused ? 'yyyy-mm-dd' : null}
                onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange}
            />
        );
    }
}