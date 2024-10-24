import { useState } from "react";
import { Button, Header , Segment} from "semantic-ui-react";
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
      .catch((error) => console.log(error.response));
  }
  function handleBadRequest() {
    axios
      .get(baseUrl + "bugs/bad-request")
      .catch((error) => console.log(error.response));
  }
  function handleServerError() {
    axios
      .get(baseUrl + "bugs/server-error")
      .catch((error) => console.log(error.response));
  }
  function handleUnauthorised() {
    axios
      .get(baseUrl + "bugs/unauthorised")
      .catch((error) => console.log(error.response));
  }
  function handleBadGuid() {
    axios
      .get(baseUrl + "activities/notaguid")
      .catch((error) => console.log(error.response));
  }
  function handleValidationError() {
    axios.post(baseUrl + "activities", {}).catch((error) => setErrors(error));
  }

  return (
    <>
      <Header
        as="h1"
        content="Test Errors"
        style={{ color: "#fff", marginBottom: "20px" }}
      />
      <Button
        inverted
        onClick={handleNotFound}
        content="Not Found"
        style={{ borderRadius: "25px", marginRight: "20px" }}
      />
      <Button
        inverted
        onClick={handleBadRequest}
        content="Bad Request"
        style={{ borderRadius: "25px", marginRight: "20px" }}
      />
      <Button
        inverted
        onClick={handleValidationError}
        content="Validation Error"
        style={{ borderRadius: "25px", marginRight: "20px" }}
      />
      <Button
        inverted
        onClick={handleServerError}
        content="Server Error"
        style={{ borderRadius: "25px", marginRight: "20px" }}
      />
      <Button
        inverted
        onClick={handleUnauthorised}
        content="Unauthorised"
        style={{ borderRadius: "25px", marginRight: "20px" }}
      />
      <Button
        inverted
        onClick={handleBadGuid}
        content="Bad Guid"
        style={{ borderRadius: "25px", marginRight: "20px" }}
      />
      {errors && <Segment style={segmentStyles}><ValidationError errors={errors} /></Segment>}
    </>
  );
}
