// create style here
const styles = {
  form: {
    backgroundColor: "red"
  }
}

// create Form component
function Form() {
  return (
    // code inside div
    <div>
      <form style={styles.form} >
        <div>
          <label htmlFor="usernameInput"
            style={{ display: "block", marginBottom: "5px" }} >
            Username
          </label>
          <input type="text"
            id="usernameInput"
            placeholder="type username here"
            style={{
              fontSize: "1rem",
              padding: "10px",
              borderRadius: "15"
            }} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
