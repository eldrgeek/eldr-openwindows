import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AutoButton from "./AutoButton";
import SelectList from "./SelectList";

const DOC_ID = "1iYDEq-gjyXT5get3Cc1A-3kWQ67sYFL4fJ73X2hNlb4";
const FOLDER_ID = "0B9Uo4HiNk66aOTFBTEJCaVc3bjA";
const DOC_TITLE = "New Post";
let BLOG_ID = "809323243837962619";
const openString = `https://docs.google.com/document/d/${DOC_ID}/copy?id=${DOC_ID}&copyCollaborators=false&copyComments=false&title=${DOC_TITLE}&copyDestination=${FOLDER_ID}`;
let bloggerString = `https://www.blogger.com/blogger.g?blogID=${BLOG_ID}#editor/src=sidebar`;

const onBlogging = () => {
  window.open(openString, "document");
  window.open("https://stackedit.io/app#", "stackedit");
  window.open("https://app.grammarly.com/ddocs/401948390", "grammarly");
  window.open(bloggerString, "blogger");
};
const onVideo = () => {
  window.open(
    "https://www.onlinevideoconverter.com/youtube-converter",
    "stackedit"
  );
  window.open("https://otter.ai/", "otter");
};
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const [blogID, setBlogID] = useState(BLOG_ID);

  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    setBlogID(suggestion.id);
    // setBlogID("5020094460495367140");

    bloggerString = `https://www.blogger.com/blogger.g?blogID=${
      suggestion.id
    }#editor/src=sidebar`;

    console.log("id", suggestion.id, bloggerString);
    // console.log(event, {
    //   suggestion,
    //   suggestionValue,
    //   suggestionIndex,
    //   sectionIndex,
    //   method
    // });
  };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SelectList
              onSuggestionSelected={onSuggestionSelected}
              searchLabel="Blogerista"
              searchPlaceholder="Enter the blog pattern"
            />
            {blogID}
            <br />
            {bloggerString}
            <AutoButton onClick={onBlogging} label="blogging" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <AutoButton onClick={onVideo} label="transcription">
              Blogging
            </AutoButton>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=30 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
