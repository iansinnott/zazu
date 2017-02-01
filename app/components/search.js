const React = require('react')
const globalEmitter = require('../lib/globalEmitter')

const Search = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    handleQueryChange: React.PropTypes.func.isRequired,
  },

  getInitialState () {
    return {
      input: null,
      history: [],
    }
  },

  focus () {
    this.state.input && this.state.input.focus()
  },

  handleSaveQuery () {
    this.setState({
      historyId: -1,
      history: [
        this.props.value,
        ...this.state.history,
      ].slice(0, 10),
    })
  },

  canTraverseValue () {
    const { input } = this.state
    if (!input) return false
    const hasNoText = input.value.length === 0
    const isFullySelected = input.selectionStart !== input.selectionEnd
    return hasNoText || isFullySelected
  },

  handlePreviousSearch () {
    const historyId = this.state.historyId + 1
    this.props.handleQueryChange(this.state.history[historyId])
    this.setState({
      historyId,
    })
  },

  handleNextSearch () {
    const historyId = this.state.historyId - 1
    this.props.handleQueryChange(this.state.history[historyId])
    this.setState({
      historyId,
    })
  },

  componentDidMount () {
    globalEmitter.on('hideWindow', this.handleSaveQuery)
    Mousetrap.bind('up', () => {
      if (this.canTraverseValue()) {
        this.handlePreviousSearch()
      }
    })
    Mousetrap.bind('down', () => {
      if (this.canTraverseValue()) {
        this.handleNextSearch()
      }
    })
    this.focus()
  },

  componentWillUnmount () {
    globalEmitter.removeListener('hideWindow', this.handleSaveQuery)
  },

  componentDidUpdate () {
    if (this.props.value === '') {
      this.focus()
    }
  },

  handleQueryChange (event) {
    const query = event.target.value
    this.props.handleQueryChange(query)
    this.setState({
      historyId: -1,
    })
  },

  setReference (input) {
    this.setState({
      input,
    })
  },

  render () {
    const { value } = this.props

    return (
      <input
        title='Search Zazu'
        className='mousetrap'
        ref={this.setReference}
        type='text'
        onChange={this.handleQueryChange}
        value={value} />
    )
  },
})

module.exports = Search
