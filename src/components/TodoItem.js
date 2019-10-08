import React, { Component } from "react";

import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.expired && !this.props.todo.completed) {
      return { backgroundColor: "#f0134d" };
    } else if (this.props.todo.completed) {
      return { backgroundColor: "#2ECC71" };
    } else {
      return { backgroundColor: "#37324d" };
    }
  };

  render() {
    const {
      id,
      title,
      body,
      timeCreated,
      deadline,
      expired,
      timeLeft
    } = this.props.todo;
    console.log(timeLeft);
    return (
      <div className="todoItem" style={this.getStyle()}>
        <p className="todoItem__dateCreated">{timeCreated}</p>
        <p className="todoItem__title">{title}</p>

        <p className="todoItem__body">{body}</p>
        {/* <p>{this.props.convertDateFromISO(deadline)}</p> */}
        <p className="todoItem__deadline">deadline {deadline}</p>

        <p className="todoItem__timeLeft">
          {timeLeft < 0 ? "expired" : timeLeft}
        </p>
        <div className="todoItem__controls">
          <button
            className="btn btn-complete"
            onClick={this.props.markComplete.bind(this, id)}
          >
            <svg
              className="btn-complete__svg"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="442.533px"
              height="442.533px"
              viewBox="0 0 442.533 442.533"
              style={{ enableBackgroundNew: "0 0 442.533 442.533" }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248
		l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852
		C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828
		c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33
		c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"
                />
              </g>
            </svg>
          </button>
          <button
            className="btn btn-delete"
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
