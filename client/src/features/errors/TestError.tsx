import { useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import axios from "axios";
import ValidationError from "./ValidationError";

const segmentStyles = {
    borderRadius: "25px",
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: "15px",
    border: "none",
    marginBottom: "25px",
  };


export default function TestErrors() {
  const baseUrl = "http://localhost:5000/api/";
  const [errors, setErrors] = useState(null);

  function handleNotFound() {
    axios
      .get(baseUrl + "bugs/not-found")
      .catch((err) => console.log(err.response));
  }
  function handleBadRequest() {
    axios
      .get(baseUrl + "bugs/bad-request")
      .catch((err) => console.log(err.response));
  }
  function handleServerError() {
    axios
      .get(baseUrl + "bugs/server-error")
      .catch((err) => console.log(err.response));
  }
  function handleUnauthorised() {
    axios
      .get(baseUrl + "bugs/unauthorised")
      .catch((err) => console.log(err.response));
  }
  function handleBadGuid() {
    axios
      .get(baseUrl + "activities/notaguid")
      .catch((err) => console.log(err.response));
  }
  function handleValidationError() {
    axios.post(baseUrl + "activities", {}).catch((err) => setErrors(err));
  }

  return (
    <>
      <Header as="h1" content="Test Error component" style={{color: "#fff"}}/>
      <Segment style={segmentStyles}>
        <Button.Group widths="7">
          <Button onClick={handleNotFound} content="Not Found" basic primary />
          <Button
            onClick={handleBadRequest}
            content="Bad Request"
            basic
            primary
          />
          <Button
            onClick={handleValidationError}
            content="Validation Error"
            basic
            primary
          />
          <Button
            onClick={handleServerError}
            content="Server Error"
            basic
            primary
          />
          <Button
            onClick={handleUnauthorised}
            content="Unauthorised"
            basic
            primary
          />
          <Button onClick={handleBadGuid} content="Bad Guid" basic primary />
        </Button.Group>
      </Segment>
      {errors && <ValidationError errors={errors} />}
    </>
  );
}
