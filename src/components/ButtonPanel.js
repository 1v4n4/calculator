import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => (
  <>
    <div className="row">
      {' '}
      <Button name="AC" handleClick={() => props.clickHandler('AC')} />
      <Button name="+/-" handleClick={() => props.clickHandler('+/-')} />
      <Button name="%" handleClick={() => props.clickHandler('%')} />
      <Button name="/" handleClick={() => props.clickHandler('/')} />
      {' '}

    </div>
    <div className="row">
      {' '}
      <Button name="7" handleClick={() => props.clickHandler('7')} />
      <Button name="8" handleClick={() => props.clickHandler('8')} />
      <Button name="9" handleClick={() => props.clickHandler('9')} />
      <Button name="*" handleClick={() => props.clickHandler('*')} />
      {' '}

    </div>
    <div className="row">
      {' '}
      <Button name="4" handleClick={() => props.clickHandler('4')} />
      <Button name="5" handleClick={() => props.clickHandler('5')} />
      <Button name="6" handleClick={() => props.clickHandler('6')} />
      <Button name="-" handleClick={() => props.clickHandler('-')} />
      {' '}

    </div>
    <div className="row">
      {' '}
      <Button name="1" handleClick={() => props.clickHandler('1')} />
      <Button name="2" handleClick={() => props.clickHandler('2')} />
      <Button name="3" handleClick={() => props.clickHandler('3')} />
      <Button name="+" handleClick={() => props.clickHandler('+')} />
      {' '}

    </div>
    <div className="row">
      {' '}
      <Button name="0" handleClick={() => props.clickHandler('0')} />
      <Button name="." handleClick={() => props.clickHandler('.')} />
      <Button name="=" handleClick={() => props.clickHandler('=')} />
      {' '}
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
