import propTypes from 'prop-types';

export default function Button(props) {
    const className = [props.className];

    // condirional
    if(props.isPrimary) className.push("btn-primary")
    if(props.isSecondary) className.push("btn-secondary")
    if(props.isDelete) className.push("btn-delete");

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    return (
        <button
            className={`btn ${className.join(" ")}`}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    onClick: propTypes.func,
    className: propTypes.string,
    isPrimary: propTypes.bool,
    isSecondary: propTypes.bool,
    isDelete: propTypes.bool,
}