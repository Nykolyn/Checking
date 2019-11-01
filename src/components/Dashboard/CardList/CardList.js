/*eslint-disable*/
import React from 'react';
import Card from '../Card/Card';
import styles from '../CardList/CardList.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { taskPopUpCreateIsOpen } from '../../../redux/componentController/controllerSelectrors';

const CardList = ({ cardItems, taskPopUpCreateIsOpen }) => {
  return (
    <div>
      <ul
        className={
          !taskPopUpCreateIsOpen ? [styles.cardList] : [styles.cardListOpen]
        }
      >
        {cardItems.map(el => (
          <li
            className={
              !taskPopUpCreateIsOpen ? [styles.cardItem] : [styles.cardItemOpen]
            }
            key={el._id}
          >
            <Card task={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  taskPopUpCreateIsOpen: taskPopUpCreateIsOpen(state),
});

export default connect(
  mapStateToProps,
  null,
)(CardList);
