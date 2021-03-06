import React                   from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes               from 'prop-types';

import Css                     from '../hoc/Css';


const Animate = ( {
    children,
    className,
    enterAnimation,
    outAnimation,
    cssMap,
    transitionEnterTimeout,
    transitionLeaveTimeout,
} ) =>

    <Css cssMap = { cssMap }>
        <div className = { className }>
            <ReactCSSTransitionGroup
                transitionName = { {
                    enter : `animate__${enterAnimation}`,
                    leave : `animate__${outAnimation}`,
                } }
                component              = "div"
                className              = {
                    `animate__${enterAnimation}__${outAnimation}`
                }
                transitionEnterTimeout = { transitionEnterTimeout }
                transitionLeaveTimeout = { transitionLeaveTimeout }>
                { children }
            </ReactCSSTransitionGroup>
        </div>
    </Css>;

Animate.propTypes =
{
    /**
    *  Animate content
    */
    children       : PropTypes.node,
    /**
    *  Enter Animation type
    */
    enterAnimation : PropTypes.oneOf( [
        'fadeIn',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp',
    ] ),
    /**
    *  Out Animation type
    */
    outAnimation : PropTypes.oneOf( [
        'fadeOut',
        'slideOutDown',
        'slideOutLeft',
        'slideOutRight',
        'slideOutUp',
    ] ),
    /**
    * Animate enter animation duration
    */
    transitionEnterTimeout : PropTypes.number,
    /**
    * Animate out animation duration
    */
    transitionLeaveTimeout : PropTypes.number,
};

Animate.defaultProps =
{
    transitionEnterTimeout : 1000,
    transitionLeaveTimeout : 1000,
    enterAnimation         : 'fadeIn',
    outAnimation           : 'fadeOut',
    cssMap                 : require( './animate.css' ),
};

export default Animate;
