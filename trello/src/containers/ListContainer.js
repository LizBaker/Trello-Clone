import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteList } from "../actions/listActions";
import { filteredItems } from '../reducers/itemReducer'
import styled from "styled-components";
import List from "../components/List";
import ListHeader from '../components/ListHeader';

const ListWrapper = styled.div`
  width: 272px;
  flex-shrink: 0;
  background-color: #e2e4e6;
  max-height: 100%;
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;
`;

class ListContainer extends Component {
  render() {
    return (
      <ListWrapper>
        <Fragment>
          <ListHeader name={this.props.list.name} handleDelete={() => this.props.deleteList(this.props.list.id)} />
          <List items={this.props.items} list={this.props.list} />
        </Fragment>
      </ListWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {items: filteredItems(state, ownProps.list)}
}

export default connect(
  mapStateToProps,
  { deleteList }
)(ListContainer);
