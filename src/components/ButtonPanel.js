import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => (
  <>
    <div className="row">
      {' '}
      <Button name="AC" clickHandler={() => props.handleClick('AC')} />
      <Button name="+/-" clickHandler={() => props.handleClick('+/-')} />
      <Button name="%" clickHandler={() => props.handleClick('%')} />
      <Button name="/" clickHandler={() => props.handleClick('/')} />
      {' '}

    </div>
    <div className="row">
      {' '}
      <Button name="7" clickHandler={() => props.handleClick('7')} />
      <Button name="8" clickHandler={() => props.handleClick('8')} />
      <Button name="9" clickHandler={() => props.handleClick('9')} />
      <Button name="*" clickHandler={() => props.handleClick('*')} />
      {' '}

    </div>
    <div className="row">
      {' '}
      <Button name="4" clickHandler={() => props.handleClick('4')} />
      <Button name="5" clickHandler={() => props.handleClick('5')} />
      <Button name="6" clickHandler={() => props.handleClick('6')} />
      <Button name="-" clickHandler={() => props.handleClick('-')} />
      {' '}

    </div>
    <div className="row">
      {' '}
      <Button name="1" clickHandler={() => props.handleClick('1')} />
      <Button name="2" clickHandler={() => props.handleClick('2')} />
      <Button name="3" clickHandler={() => props.handleClick('3')} />
      <Button name="+" clickHandler={() => props.handleClick('+')} />
      {' '}

    </div>
    <div className="row">
      {' '}
      <Button name="0" clickHandler={() => props.handleClick('0')} />
      <Button name="." clickHandler={() => props.handleClick('.')} />
      <Button name="=" clickHandler={() => props.handleClick('=')} />
      {' '}
    </div>
  </>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
