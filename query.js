/*jslint node: ture */

'use strict';

var QueryString = React.createClass({
  render: function () {
    return (
      <div className="queryString">
        <label>{this.props.label}</label>
        <input />
      </div>
    );
  }
});

var QueryInteger = React.createClass({
  render: function () {
    return (
      <div className="queryInteger">
        <label>{this.props.label}</label>
      </div>
    );
  }
});

var QueryForm = React.createClass({
  loadFieldFromServer: function () {
    var data = [{
      id: 1,
      label: "姓名"
    }, {
      id: 2,
      label: "ID"
    }];
    this.setState({ data: data });
  },
  getInitialState: function () {
    return { data: [] };
  },
  componentDidMount: function () {
    this.loadFieldFromServer();
  },
  render: function() {
    var fieldNodes = this.state.data.map(function (field) {
      console.log(field);
      return (
        <QueryString key={field.id} label={field.label} />
      );
    });
    return (
      <div className="queryForm">
        Hello, world! I am a QueryForm.
        {fieldNodes}
        {/*<QueryInteger label="价格" />*/}
      </div>
    );
  }
});

ReactDOM.render(
  <QueryForm data="{data}" />,
  document.getElementById('content')
);
