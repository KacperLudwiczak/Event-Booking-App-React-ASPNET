import { useState } from "react";
import { Button, Header } from "semantic-ui-react";
import axios from "axios";
import ValidationError from "./ValidationError";


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
      <Header
        as="h1"
        content="Test Error component"
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
      {errors && <ValidationError errors={errors} />}
    </>
  );
}
