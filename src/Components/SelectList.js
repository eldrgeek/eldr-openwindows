import React from "react";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
// import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
// import { prototype } from "events";

let suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
];

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.blog, query);
  const parts = parse(suggestion.blog, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(part => (
          <span
            key={part.text}
            style={{ fontWeight: part.highlight ? 500 : 400 }}
          >
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  const matchString = value
    .toLowerCase()
    .split(" ")
    .join(".*");
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.blog.toLowerCase().match(matchString);
        //suggestion.blog.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.blog;
}

const useStyles = makeStyles(theme => ({
  root: {
    // height: 250,
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing(2)
  }
}));

function IntegrationAutosuggest(props) {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    single: "",
    popper: ""
  });

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue
    });
  };
  const onSuggestionSelected = props.onSuggestionSelected;

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionSelected
  };

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          id: "react-autosuggest-simple",
          label: props.searchLabel,
          placeholder: props.searchPlaceholder,
          value: state.single,
          onChange: handleChange("single")
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    </div>
  );
}

suggestions = [
  { blog: "70 Years WTF", id: 809323243837962619 },
  { blog: "Notes to myself", id: 5674376634552534587 },
  { blog: "Mike’s Memories", id: 3726451002764432380 },
  { blog: "Mike’s Metablog", id: 466624441820651330 },
  { blog: "RSILT Random Shit", id: 5020094460495367140 },
  { blog: "The Blog God Told Me To Write", id: 8427239506598292014 },
  { blog: "Awesome Development", id: 4647126966183992311 },
  { blog: "Blue Hill Hackers", id: 3416541093599519804 },
  { blog: "For the Borglings", id: 1132572901292308138 },
  { blog: "Liberal Legacy", id: 3991748264161925863 },
  { blog: "My Future Self’s Blog", id: 3991748264161925863 },
  { blog: "My Own Memento", id: 7084648308646134853 },
  { blog: "Reality isn’t optional", id: 272400206626152900 },
  { blog: "Self Referential Meta", id: 272400206626152900 },
  { blog: "Technology Breadcrumbs", id: 4694119469072911822 },
  { blog: "Political Breadcrumbs ", id: 5079694219466259451 },
  { blog: "The Wolf Report", id: 14759501 },
  { blog: "What Passes For Wisdom", id: 9043821949686794118 }
];

const onSuggestionSelected = (
  vent,
  { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
) => {
  console.log(vent, {
    suggestion,
    suggestionValue,
    suggestionIndex,
    sectionIndex,
    method
  });
};

const MyAutoSuggest = props => {
  let newprops = Object.assign(
    {
      onSuggestionSelected,
      searchLabel: "Blog",
      searchPlaceholder: "Enter blog pattern"
    },
    Object.create(props)
  );

  return IntegrationAutosuggest(newprops);
};

export default MyAutoSuggest;
